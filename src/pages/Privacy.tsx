import { LegalShell } from "@/components/LegalShell";

export default function PrivacyPolicy() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="EUFIA Privacy Policy — how information submitted through this website is collected, used, stored and protected, and the rights available to you."
      path="/privacy-policy"
      updated="27 September 2026"
      intro="This policy explains what personal information EUFIA collects through this website, why we collect it, how it is handled, and the choices available to you."
      siblingHref="/terms-and-conditions"
      siblingLabel="Terms & Conditions"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "EUFIA is a maritime shipping, vessel chartering and global logistics company. References to “EUFIA”, “we” or “us” in this document refer to the legal entity operating this website.",
          ],
          verificationNote:
            "Insert the registered company name, registration number, registered office address and primary contact email before publication.",
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect information that you choose to provide through this website, together with limited technical information generated when the site is used.",
          ],
          bullets: [
            "Enquiry details: name, company, email address, phone number, service of interest, subject and message submitted through the contact form.",
            "Consent records: the fact that you agreed to be contacted in response to your enquiry.",
            "Technical information: browser type, device type, pages visited and approximate visit duration, where analytics are enabled.",
          ],
          verificationNote:
            "Confirm which analytics or cookie tools (if any) are deployed and list them here with their providers and retention periods.",
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "Personal information is used only for the purposes for which it was collected.",
          ],
          bullets: [
            "To review and respond to enquiries submitted through the website.",
            "To prepare quotations, chartering proposals or service information you have requested.",
            "To maintain the security and performance of this website.",
            "To meet legal, regulatory and record-keeping obligations that apply to our business.",
          ],
        },
        {
          heading: "Legal bases for processing",
          paragraphs: [
            "Where data protection law applies, we rely on one or more of the following legal bases: your consent where you have given it; steps taken at your request prior to entering a contract; performance of a contract with you; compliance with a legal obligation; and our legitimate interests in operating and improving our maritime services, provided those interests do not override your rights.",
          ],
          verificationNote:
            "Confirm the applicable data protection regime(s) (e.g. UK/EU GDPR or other local legislation) for the operating entity.",
        },
        {
          heading: "Sharing your information",
          paragraphs: [
            "We do not sell personal information. Where necessary to handle your enquiry or deliver a requested service, information may be shared with trusted service providers operating under appropriate confidentiality and data-processing arrangements, or with authorities where disclosure is required by law.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Enquiry records are retained only for as long as needed for the purpose they were collected for, including reasonable record-keeping periods that may apply to commercial correspondence in the maritime industry.",
          ],
          verificationNote:
            "Define the specific retention period(s) for enquiry records and contractual correspondence.",
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Depending on your jurisdiction, you may have the right to request access to the personal information we hold about you, to request correction or erasure, to restrict or object to processing, and to receive a portable copy of your data. Where processing relies on consent, you may withdraw that consent at any time.",
          ],
          bullets: [
            "To exercise any of these rights, contact us through the website contact form and select the subject “Privacy request”.",
            "You may also have the right to lodge a complaint with your local data protection authority.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "We take reasonable technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure or loss. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "This website uses only the storage required for its own operation unless analytics or marketing tools are enabled at launch.",
          ],
          verificationNote:
            "List any non-essential cookies or analytics identifiers here, or confirm that none are used and remove this note.",
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "This policy may be updated to reflect changes in our practices or applicable law. The “last updated” date at the top of this page indicates the most recent revision.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about this policy or about how your information is handled can be sent through the contact page of this website.",
          ],
          verificationNote:
            "Add a dedicated privacy contact email and postal address once configured.",
        },
      ]}
    />
  );
}
