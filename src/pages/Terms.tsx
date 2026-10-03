import { LegalShell } from "@/components/LegalShell";

export default function TermsAndConditions() {
  return (
    <LegalShell
      title="Terms & Conditions"
      description="EUFIA Terms & Conditions — the terms governing use of this website and the relationship between website content and individual service agreements."
      path="/terms-and-conditions"
      updated="27 September 2026"
      intro="These terms govern your use of this website. Service engagements are governed by separate written agreements specific to each charter, shipment or engagement."
      siblingHref="/privacy-policy"
      siblingLabel="Privacy Policy"
      sections={[
        {
          heading: "Acceptance of these terms",
          paragraphs: [
            "By accessing or using this website you agree to these Terms & Conditions. If you do not agree, please discontinue use of the site.",
          ],
        },
        {
          heading: "About EUFIA",
          paragraphs: [
            "EUFIA provides maritime shipping, vessel chartering and global logistics services, including vessel chartering, dry bulk and tanker shipping, freight forwarding, project cargo, maritime consultancy, cargo inspection and global logistics.",
          ],
          verificationNote:
            "Insert the registered legal entity name, registration details, registered office and company number before publication.",
        },
        {
          heading: "Website content",
          paragraphs: [
            "The content of this website is provided for general information about our services. While we take care to keep information accurate and current, nothing on this site constitutes legal, commercial or technical advice, and no content should be treated as a binding offer, undertaking or guarantee of any particular outcome.",
          ],
        },
        {
          heading: "Quotes, bookings and service agreements",
          paragraphs: [
            "Any quotation, fixture, booking or engagement is subject to separate written terms agreed between the parties. In the event of any conflict, the executed contract or charter party for the relevant service prevails over anything published on this website.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "You agree to use this website lawfully and not to interfere with its operation, security or availability, attempt unauthorised access, or submit false, misleading or malicious content through its forms.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "All content on this website — including text, design, illustrations, graphics, logo and code — is owned by or licensed to EUFIA and is protected by applicable intellectual property laws. Reproduction or commercial use without prior written permission is not permitted.",
          ],
        },
        {
          heading: "Third-party links",
          paragraphs: [
            "This website may link to third-party websites. Those sites are operated independently, and we are not responsible for their content, policies or practices.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, EUFIA is not liable for indirect, incidental or consequential loss arising from use of, or inability to use, this website or reliance on its content. Nothing in these terms excludes liability that cannot lawfully be excluded.",
          ],
          verificationNote:
            "Have legal counsel review the liability wording and confirm it is consistent with the governing law of the operating entity.",
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws applicable to the legal entity operating this website, and the courts of that jurisdiction have exclusive jurisdiction over disputes relating to these terms.",
          ],
          verificationNote:
            "Specify the governing law and jurisdiction once confirmed by legal counsel.",
        },
        {
          heading: "Changes to these terms",
          paragraphs: [
            "We may update these terms from time to time. Continued use of the website after changes are published constitutes acceptance of the revised terms.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about these terms can be sent through the contact page of this website.",
          ],
          verificationNote: "Add a legal/contact email address once configured.",
        },
      ]}
    />
  );
}
