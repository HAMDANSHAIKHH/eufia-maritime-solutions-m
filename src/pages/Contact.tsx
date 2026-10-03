import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router";
import { z } from "zod";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal, SplitHeading, StaggerGroup, StaggerItem } from "@/components/anim/primitives";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/data/services";
import { CONTACT } from "@/data/site";
import { breadcrumbJsonLd, usePageSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().optional(),
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("Enter a valid email address."),
  phone: z.string().optional(),
  service: z.string().optional(),
  subject: z.string().min(2, "Please add a subject."),
  message: z
    .string()
    .min(20, "Please share a little more detail (at least 20 characters)."),
  consent: z.boolean().refine((value) => value === true, {
    message: "Please accept the privacy policy to continue.",
  }),
  /** honeypot — always empty for real visitors */
  website: z.string().optional(),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const inputClass =
  "w-full rounded-md border border-navy/20 bg-warm px-4 py-3 text-sm text-navy placeholder:text-steel/60 transition-colors focus:border-caramel focus:outline-none focus:ring-2 focus:ring-caramel/25";

const STEPS = [
  {
    title: "Share the movement",
    text: "Cargo, route, timing and any constraints worth knowing — the more precise the brief, the sharper the response.",
  },
  {
    title: "Review & clarifications",
    text: "EUFIA reviews the enquiry and comes back with any questions needed to shape chartering, forwarding or inspection scope.",
  },
  {
    title: "A considered proposal",
    text: "You receive a clear outline of the proposed approach, terms and next steps for your shipment.",
  },
];

/** Kept outside the component so render stays pure. */
const now = () => Date.now();

export default function Contact() {
  const [searchParams] = useSearchParams();
  const submitEnquiry = useMutation(api.contact.submit);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const loadedAtRef = useRef(0);

  /* stamp the render time for the completion-time spam check */
  useEffect(() => {
    loadedAtRef.current = now();
  }, []);

  const requestedService = searchParams.get("service") ?? "";
  const wantsQuote = searchParams.get("intent") === "quote";

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<EnquiryForm>({
    mode: "onBlur",
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: SERVICES.some((s) => s.slug === requestedService)
        ? requestedService
        : "",
      subject: wantsQuote ? "Request for a quotation" : "",
      message: "",
      consent: false,
      website: "",
    },
  });

  usePageSeo({
    title: "Contact EUFIA | Request a Quote for Shipping & Logistics",
    description:
      "Contact EUFIA about vessel chartering, dry bulk and tanker shipping, freight forwarding, project cargo, maritime consultancy, cargo inspection or global logistics.",
    path: "/contact",
    jsonLd: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  });

  const onSubmit = async (values: EnquiryForm) => {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      await submitEnquiry({
        name: values.name,
        company: values.company || undefined,
        email: values.email,
        phone: values.phone || undefined,
        service: values.service || undefined,
        subject: values.subject,
        message: values.message,
        consent: values.consent,
        website: values.website,
        loadedAt: loadedAtRef.current,
        sourcePage: window.location.pathname,
      });
      setStatus("success");
      reset();
      loadedAtRef.current = now();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message.replace(/^Uncaught Exception:?\s*/i, "")
          : "Something went wrong while sending your enquiry. Please try again.",
      );
    }
  };

  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="px-5 pb-10 pt-32 sm:px-8 lg:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="eyebrow text-caramel">Contact</p>
              </Reveal>
              <SplitHeading
                as="h1"
                lines={[["Tell us what you"], ["need to move."]]}
                className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.03em] text-navy"
                delay={0.15}
                stagger={0.07}
              />
            </div>
            <Reveal delay={0.4} className="lg:col-span-5">
              <p className="max-w-lg text-[1.02rem] leading-relaxed text-steel lg:ml-auto">
                Chartering, forwarding, inspection or a full logistics scope —
                share the details and EUFIA will come back with a considered
                response.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------- FORM ------------------------------- */}
      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
          {/* details column */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="rounded-lg border border-navy/15 bg-sand p-7">
                <p className="eyebrow text-caramel">Direct details</p>
                <dl className="mt-6 space-y-5 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-steel">
                      Company
                    </dt>
                    <dd className="mt-1.5 font-semibold text-navy">
                      {CONTACT.companyName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-steel">
                      Email
                    </dt>
                    <dd className="mt-1.5 text-navy">
                      <a href={`mailto:${CONTACT.email}`} className="hover:text-caramel font-medium">
                        {CONTACT.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-steel">
                      Phone
                    </dt>
                    <dd className="mt-1.5 text-navy">
                      <a href={`tel:${CONTACT.phone}`} className="hover:text-caramel font-medium">
                        {CONTACT.phoneFormatted}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-steel">
                      Registered Office
                    </dt>
                    <dd className="mt-1.5 space-y-0.5 text-navy">
                      {CONTACT.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 border-t border-navy/15 pt-5 text-xs leading-relaxed text-steel">
                  {CONTACT.companyName} is registered in Dubai, United Arab Emirates. Enquiries sent through
                  this form are received directly by our operations team.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 rounded-lg border border-navy/15 bg-warm p-7">
                <p className="eyebrow text-caramel">What happens next</p>
                <ol className="mt-6 space-y-6">
                  {STEPS.map((step, i) => (
                    <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="font-display text-sm text-caramel/80">
                        0{i + 1}
                      </span>
                      <span>
                        <span className="block font-display text-lg leading-snug text-navy">
                          {step.title}
                        </span>
                        <span className="mt-1.5 block text-[0.9rem] leading-relaxed text-steel">
                          {step.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* form column */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-navy/15 bg-warm p-6 shadow-[0_40px_80px_-70px_rgba(23,43,58,0.9)] sm:p-9">
                {status === "success" ? (
                  <div
                    className="flex flex-col items-start gap-5 py-10 text-left"
                    role="status"
                    aria-live="polite"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-baby text-navy">
                      <CheckCircle2 className="h-7 w-7" />
                    </span>
                    <h2 className="font-display text-3xl tracking-[-0.02em] text-navy">
                      Your enquiry has been received.
                    </h2>
                    <p className="max-w-md text-[0.98rem] leading-relaxed text-steel">
                      Thank you — the EUFIA team will review the details and respond
                      using the contact information you provided.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-2 inline-flex items-center gap-2 rounded-md border border-navy/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-caramel hover:text-caramel"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(event) => {
                      void handleSubmit(onSubmit)(event);
                    }}
                    noValidate
                  >
                    <p className="eyebrow text-caramel">Enquiry form</p>
                    <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] text-navy sm:text-4xl">
                      Request a quote or ask a question
                    </h2>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      {/* name */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-xs uppercase tracking-[0.16em] text-steel"
                        >
                          Name *
                        </Label>
                        <Input
                          id="name"
                          autoComplete="name"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={inputClass}
                          placeholder="Your full name"
                          {...register("name")}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-xs text-destructive" role="alert">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* company */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-xs uppercase tracking-[0.16em] text-steel"
                        >
                          Company
                        </Label>
                        <Input
                          id="company"
                          autoComplete="organization"
                          className={inputClass}
                          placeholder="Company name"
                          {...register("company")}
                        />
                      </div>

                      {/* email */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-xs uppercase tracking-[0.16em] text-steel"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={inputClass}
                          placeholder="name@company.com"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-xs text-destructive" role="alert">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* phone */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-xs uppercase tracking-[0.16em] text-steel"
                        >
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          className={inputClass}
                          placeholder="+00 000 000 0000"
                          {...register("phone")}
                        />
                      </div>

                      {/* service */}
                      <div className="space-y-2 sm:col-span-2">
                        <Label
                          htmlFor="service"
                          className="text-xs uppercase tracking-[0.16em] text-steel"
                        >
                          Service of interest
                        </Label>
                        <div className="relative">
                          <select
                            id="service"
                            className={cn(inputClass, "appearance-none pr-10")}
                            {...register("service")}
                          >
                            <option value="">Not sure yet / General enquiry</option>
                            {SERVICES.map((service) => (
                              <option key={service.slug} value={service.slug}>
                                {service.number} — {service.title}
                              </option>
                            ))}
                          </select>
                          <span
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-steel"
                            aria-hidden="true"
                          >
                            ▾
                          </span>
                        </div>
                      </div>

                      {/* subject */}
                      <div className="space-y-2 sm:col-span-2">
                        <Label
                          htmlFor="subject"
                          className="text-xs uppercase tracking-[0.16em] text-steel"
                        >
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          aria-invalid={Boolean(errors.subject)}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                          className={inputClass}
                          placeholder="e.g. Dry bulk fixture — 30,000 t, Gulf to West Africa"
                          {...register("subject")}
                        />
                        {errors.subject && (
                          <p id="subject-error" className="text-xs text-destructive" role="alert">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>

                      {/* message */}
                      <div className="space-y-2 sm:col-span-2">
                        <Label
                          htmlFor="message"
                          className="text-xs uppercase tracking-[0.16em] text-steel"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          rows={6}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          className={cn(inputClass, "min-h-36 resize-y")}
                          placeholder="Cargo, route, timing, quantities and anything else worth knowing…"
                          {...register("message")}
                        />
                        {errors.message && (
                          <p id="message-error" className="text-xs text-destructive" role="alert">
                            {errors.message.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* honeypot */}
                    <div className="sr-only" aria-hidden="true">
                      <label htmlFor="website">Leave this field empty</label>
                      <input
                        id="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("website")}
                      />
                    </div>

                    {/* consent */}
                    <Controller
                      control={control}
                      name="consent"
                      render={({ field }) => (
                        <div className="mt-6 flex items-start gap-3">
                          <Checkbox
                            id="consent"
                            checked={field.value}
                            onCheckedChange={(checked) => field.onChange(checked === true)}
                            aria-invalid={Boolean(errors.consent)}
                            className="mt-0.5 border-navy/40 data-[state=checked]:border-caramel data-[state=checked]:bg-caramel"
                          />
                          <div className="space-y-1.5">
                            <Label
                              htmlFor="consent"
                              className="text-[0.85rem] font-normal leading-relaxed text-steel"
                            >
                              I consent to EUFIA processing the information provided in
                              this form in order to respond to my enquiry, as described
                              in the{" "}
                              <Link
                                to="/privacy-policy"
                                className="text-caramel underline underline-offset-2 hover:text-caramel-deep"
                              >
                                Privacy Policy
                              </Link>
                              . *
                            </Label>
                            {errors.consent && (
                              <p className="text-xs text-destructive" role="alert">
                                {errors.consent.message}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    />

                    {status === "error" && errorMessage && (
                      <div
                        className="mt-6 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                        role="alert"
                      >
                        {errorMessage}
                      </div>
                    )}

                    <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group inline-flex items-center justify-center gap-3 rounded-md bg-caramel px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-warm transition-all duration-300 hover:bg-caramel-deep disabled:pointer-events-none disabled:opacity-60"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send enquiry
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                      <p className="text-xs text-steel">
                        Required fields are marked with an asterisk.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-navy/15 bg-baby/60 px-6 py-5">
                <p className="text-sm text-navy/85">
                  Looking for service detail first? Explore the full service range.
                </p>
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy hover:text-caramel-deep"
                >
                  All services
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------- SERVICE STRIP ------------------------- */}
      <section className="border-t border-navy/10 bg-sand px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <StaggerGroup className="grid gap-8 md:grid-cols-3" stagger={0.1}>
            {SERVICES.slice(0, 3).map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block border-t-2 border-navy/70 pt-5 transition-colors hover:border-caramel"
                >
                  <span className="font-display text-sm text-caramel/80">
                    {service.number}
                  </span>
                  <span className="mt-3 block font-display text-2xl tracking-[-0.01em] text-navy transition-colors group-hover:text-caramel">
                    {service.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-steel">
                    {service.tagline}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
