import { v } from "convex/values";
import { mutation } from "./_generated/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Public enquiry submission for the website contact form.
 *
 * Includes light-weight spam protection: a honeypot field, a minimum
 * completion-time check and per-address rate limiting. Submissions are stored
 * in the `enquiries` table so the team can review them from the Convex dashboard.
 */
export const submit = mutation({
  args: {
    name: v.string(),
    company: v.optional(v.string()),
    email: v.string(),
    phone: v.optional(v.string()),
    service: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    consent: v.boolean(),
    sourcePage: v.optional(v.string()),
    /** honeypot — real visitors never fill this */
    website: v.optional(v.string()),
    /** timestamp rendered into the form, used for completion-time checks */
    loadedAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Honeypot triggered: pretend success, store nothing.
    if (args.website && args.website.trim().length > 0) {
      return { ok: true as const };
    }

    const name = args.name.trim();
    const email = args.email.trim();
    const subject = args.subject.trim();
    const message = args.message.trim();

    if (name.length < 2) throw new Error("Please provide your name.");
    if (!EMAIL_RE.test(email)) throw new Error("Please provide a valid email address.");
    if (subject.length < 2) throw new Error("Please provide a subject.");
    if (message.length < 20) {
      throw new Error("Please include a little more detail in your message (at least 20 characters).");
    }
    if (!args.consent) {
      throw new Error("Consent is required before we can respond to your enquiry.");
    }

    // Submitted suspiciously fast — treat as automated and drop silently.
    if (args.loadedAt && Date.now() - args.loadedAt < 2500) {
      return { ok: true as const };
    }

    const recent = await ctx.db
      .query("enquiries")
      .withIndex("by_email", (q) => q.eq("email", email))
      .order("desc")
      .take(6);

    if (recent.length >= 5 && Date.now() - recent[4]._creationTime < DAY_MS) {
      throw new Error(
        "You have sent several enquiries recently. Please allow some time before submitting again.",
      );
    }

    await ctx.db.insert("enquiries", {
      name,
      company: args.company?.trim() || undefined,
      email,
      phone: args.phone?.trim() || undefined,
      service: args.service || undefined,
      subject,
      message,
      consent: true,
      sourcePage: args.sourcePage,
    });

    return { ok: true as const };
  },
});
