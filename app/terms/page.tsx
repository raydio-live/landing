import type { Metadata } from "next";
import { LegalDoc, LegalSection } from "../components/legal-doc";

export const metadata: Metadata = {
  title: "Terms of Service — Raydio",
  description: "Terms and conditions for using the Raydio service.",
  alternates: { canonical: "https://raydio.live/terms" },
};

const LAST_UPDATED = "July 30, 2026";

export default function TermsPage() {
  return (
    <LegalDoc title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <LegalSection title="1. Agreement to these Terms">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of
          Raydio’s mobile apps, website at{" "}
          <a href="https://raydio.live">raydio.live</a>, APIs, and related
          services (the “Service”). By creating an account, accessing, or using
          the Service, you agree to these Terms and our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
        <p>
          If you do not agree, do not use the Service. If you use Raydio on
          behalf of an organization, you represent that you have authority to
          bind that organization to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="2. The Service">
        <p>
          Raydio is a realtime push-to-talk (walkie-talkie style) communication
          service. Features may include account authentication, profiles,
          channels, invite links, live audio sessions, and notifications. We may
          add, change, or remove features at any time.
        </p>
        <p>
          The Service is provided for lawful personal and team communication. We
          do not guarantee uninterrupted, error-free, or always-available
          operation.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility">
        <p>
          You must be at least 13 years old (or the minimum age of digital
          consent in your country, if higher) to use Raydio. If you are under the
          age of majority where you live, you may use the Service only with
          involvement of a parent or legal guardian who agrees to these Terms.
        </p>
      </LegalSection>

      <LegalSection title="4. Accounts and security">
        <p>
          You sign in using an email address and one-time passcodes we send you.
          You are responsible for:
        </p>
        <ul>
          <li>Providing accurate account and profile information</li>
          <li>Keeping access to your email account secure</li>
          <li>All activity that occurs under your Raydio account</li>
          <li>
            Notifying us promptly at{" "}
            <a href="mailto:hello@raydio.live">hello@raydio.live</a> if you
            suspect unauthorized use
          </li>
        </ul>
        <p>
          We may suspend or terminate accounts that we reasonably believe are
          compromised, abusive, or in violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="5. Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Service for unlawful, harmful, fraudulent, harassing,
            hateful, or threatening activity
          </li>
          <li>
            Transmit content that infringes others’ rights, including
            intellectual property, privacy, or publicity rights
          </li>
          <li>
            Record, rebroadcast, or distribute others’ live audio without any
            consent or rights required by law
          </li>
          <li>
            Probe, scan, or attack our systems; reverse engineer the Service
            except where permitted by law; or bypass rate limits or security
          </li>
          <li>
            Interfere with realtime sessions, spam invites, or disrupt other
            users’ use of channels
          </li>
          <li>
            Impersonate another person or misrepresent your affiliation
          </li>
          <li>
            Use the Service to send malware, unsolicited bulk communications, or
            automated abuse
          </li>
          <li>
            Use Raydio in life-critical, emergency-response, or safety-critical
            systems where failure could cause injury, death, or severe damage
          </li>
        </ul>
        <p>
          Live audio is ephemeral by default for the current product experience.
          You are solely responsible for what you say and for complying with
          applicable wiretapping, consent-to-record, and communications laws in
          your jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="6. Channels, invites, and user content">
        <p>
          You may create or join channels, share join links, and communicate by
          voice and related profile metadata (“User Content”). You retain rights
          you already have in your User Content.
        </p>
        <p>
          You grant Raydio a worldwide, non-exclusive, royalty-free license to
          host, transmit, process, and display User Content solely as needed to
          operate, secure, and improve the Service (for example, routing live
          audio to channel participants and showing profile names in the app).
        </p>
        <p>
          Channel owners and members are responsible for who they invite and for
          moderating their own communities within the tools we provide. We are
          not obligated to monitor all communications but may remove content or
          restrict accounts that violate these Terms.
        </p>
      </LegalSection>

      <LegalSection title="7. Permissions and device features">
        <p>
          Certain features require device permissions (notably microphone and,
          optionally, notifications). You can revoke permissions in system
          settings; related features may stop working. Raydio’s core talk feature
          is audio-based and does not require camera access.
        </p>
      </LegalSection>

      <LegalSection title="8. Intellectual property">
        <p>
          The Service, including software, branding, logos, and design, is owned
          by Raydio or its licensors and is protected by intellectual property
          laws. Except for the limited rights expressly granted in these Terms,
          no rights are transferred to you.
        </p>
        <p>
          You may not copy, modify, distribute, sell, or lease any part of our
          software or branding without prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="9. Third-party services">
        <p>
          The Service may depend on third-party infrastructure (hosting, email
          delivery, push notifications, realtime media). Your use of those
          components is subject to their availability and, where applicable,
          their terms. We are not responsible for third-party services we do not
          control.
        </p>
      </LegalSection>

      <LegalSection title="10. Beta / early access">
        <p>
          Features may be labeled beta, preview, or experimental. Such features
          may be unstable, change without notice, or be discontinued. They are
          provided as-is.
        </p>
      </LegalSection>

      <LegalSection title="11. Fees">
        <p>
          Raydio may currently offer free access to all or part of the Service.
          We may introduce paid plans, limits, or fees later. If we do, we will
          disclose pricing and any material changes before charging you. Taxes
          may apply where required.
        </p>
      </LegalSection>

      <LegalSection title="12. Termination">
        <p>
          You may stop using the Service at any time and may delete your account
          in the app (or by contacting us), subject to in-product requirements
          (for example, deleting owned channels first).
        </p>
        <p>
          We may suspend or terminate access immediately if you violate these
          Terms, if required by law, or if needed to protect the Service or
          other users. Upon termination, your right to use the Service ends.
          Sections that by nature should survive (including intellectual
          property, disclaimers, limitations of liability, and indemnity) will
          survive.
        </p>
      </LegalSection>

      <LegalSection title="13. Disclaimers">
        <p>
          THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM
          EXTENT PERMITTED BY LAW, RAYDIO DISCLAIMS ALL WARRANTIES, WHETHER
          EXPRESS, IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p>
          We do not warrant that the Service will be secure, uninterrupted,
          timely, or free of errors, or that audio quality will meet your
          requirements in all network conditions.
        </p>
      </LegalSection>

      <LegalSection title="14. Limitation of liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, RAYDIO AND ITS OPERATORS,
          AFFILIATES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR
          ANY LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION, ARISING
          OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY
          CLAIM ARISING OUT OF OR RELATING TO THE SERVICE OR THESE TERMS IS
          LIMITED TO THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE SERVICE
          IN THE 12 MONTHS BEFORE THE CLAIM, OR (B) USD $50.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations; in those cases,
          our liability is limited to the fullest extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="15. Indemnity">
        <p>
          You agree to defend, indemnify, and hold harmless Raydio and its
          operators from and against claims, damages, losses, and expenses
          (including reasonable legal fees) arising out of your User Content,
          your use of the Service, or your violation of these Terms or applicable
          law.
        </p>
      </LegalSection>

      <LegalSection title="16. Privacy">
        <p>
          Our collection and use of personal information is described in the{" "}
          <a href="/privacy">Privacy Policy</a>, which is incorporated by
          reference.
        </p>
      </LegalSection>

      <LegalSection title="17. Changes to the Terms">
        <p>
          We may update these Terms from time to time. We will post the updated
          Terms at <a href="https://raydio.live/terms">raydio.live/terms</a> and
          update the “Last updated” date. If changes are material, we may provide
          additional notice. Continued use after the effective date constitutes
          acceptance of the updated Terms, except where applicable law requires
          otherwise.
        </p>
      </LegalSection>

      <LegalSection title="18. Governing law and disputes">
        <p>
          These Terms are governed by the laws of India, without regard to
          conflict-of-law principles, unless mandatory consumer protection laws
          in your country of residence provide otherwise.
        </p>
        <p>
          Courts located in India shall have exclusive jurisdiction over
          disputes arising out of these Terms, subject to any non-waivable rights
          you may have under local law.
        </p>
      </LegalSection>

      <LegalSection title="19. Miscellaneous">
        <p>
          These Terms are the entire agreement between you and Raydio regarding
          the Service and supersede prior agreements on the same subject. If any
          provision is found unenforceable, the remaining provisions remain in
          effect. Our failure to enforce a provision is not a waiver. You may not
          assign these Terms without our consent; we may assign them in
          connection with a reorganization or sale of assets. Notices may be
          provided via the Service, email, or the website.
        </p>
      </LegalSection>

      <LegalSection title="20. Contact">
        <p>
          Questions about these Terms:
          <br />
          Email: <a href="mailto:hello@raydio.live">hello@raydio.live</a>
          <br />
          Website: <a href="https://raydio.live">https://raydio.live</a>
        </p>
      </LegalSection>
    </LegalDoc>
  );
}
