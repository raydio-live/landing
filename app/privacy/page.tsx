import type { Metadata } from "next";
import { LegalDoc, LegalSection } from "../components/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy — Raydio",
  description:
    "How Raydio collects, uses, and protects your personal information.",
  alternates: { canonical: "https://raydio.live/privacy" },
};

const LAST_UPDATED = "July 30, 2026";

export default function PrivacyPage() {
  return (
    <LegalDoc title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalSection title="1. Who we are">
        <p>
          This Privacy Policy describes how <strong>Raydio</strong> (“Raydio”,
          “we”, “us”, or “our”) collects, uses, stores, and shares information
          when you use the Raydio mobile applications, website at{" "}
          <a href="https://raydio.live">raydio.live</a>, related APIs, and other
          services we operate (together, the “Service”).
        </p>
        <p>
          Contact for privacy questions:{" "}
          <a href="mailto:hello@raydio.live">hello@raydio.live</a>.
        </p>
      </LegalSection>

      <LegalSection title="2. Scope">
        <p>
          This policy applies to personal data we process about users of the
          Service. It does not cover third-party websites, apps, or services that
          we do not control, even if linked from Raydio.
        </p>
      </LegalSection>

      <LegalSection title="3. Information we collect">
        <p>
          We collect information you provide, information generated when you use
          the Service, and limited technical data from your device.
        </p>
        <p>
          <strong>Account and profile information.</strong> When you sign in with
          email one-time passcodes (OTP), we collect your email address. You may
          also provide a first name, last name, display name, and mobile number
          to complete your profile. We assign a public user identifier (public
          ID) for your account.
        </p>
        <p>
          <strong>Authentication data.</strong> We process OTP requests and
          verification events, and we issue session access tokens so you can stay
          signed in on your device.
        </p>
        <p>
          <strong>Channel and social graph data.</strong> We store channel names
          and identifiers, membership and ownership roles, join tokens/links you
          use or create, and related requests (for example, requests for
          permission to create channels).
        </p>
        <p>
          <strong>Live audio / push-to-talk.</strong> Raydio is a live voice
          (walkie-talkie style) product. When you talk, your device captures
          microphone audio and transmits it in real time to other participants in
          the channel via our realtime infrastructure. Live audio is processed to
          deliver the call experience. We do not market Raydio as a permanent
          voice-message archive; recording and history features, if introduced
          later, will be disclosed in-product and in an updated policy.
        </p>
        <p>
          <strong>Push notification data.</strong> With your permission, we
          collect device push tokens (for example Expo / Firebase Cloud Messaging
          tokens) so we can send notifications related to the Service (such as
          channel or session alerts).
        </p>
        <p>
          <strong>Device and usage data.</strong> We may collect app version,
          device/OS type, crash or diagnostic logs, IP address, approximate
          network information, and timestamps of API requests needed to operate,
          secure, and debug the Service.
        </p>
        <p>
          <strong>Communications.</strong> If you email us, we receive the
          content of your message and any contact details you include.
        </p>
        <p>
          <strong>What we do not collect for core features.</strong> Raydio’s
          core product is audio-only. We do not require camera access for
          push-to-talk. We do not sell your personal information.
        </p>
      </LegalSection>

      <LegalSection title="4. How we use information">
        <p>We use the information above to:</p>
        <ul>
          <li>Create and manage accounts, profiles, and sessions</li>
          <li>Provide channels, invites, membership, and live talk features</li>
          <li>Send transactional messages (OTP emails) and optional push alerts</li>
          <li>Secure the Service, prevent abuse, and enforce our Terms</li>
          <li>Operate, maintain, measure, and improve the Service</li>
          <li>Respond to support requests and legal obligations</li>
        </ul>
        <p>
          Legal bases (where applicable, e.g. GDPR-style frameworks) include:
          performance of a contract (providing the Service you request),
          legitimate interests (security, improvement, abuse prevention),
          consent (for example microphone and notification permissions on your
          device), and legal obligation.
        </p>
      </LegalSection>

      <LegalSection title="5. How we share information">
        <p>
          We share personal data only as needed to run Raydio, not as a product
          we sell.
        </p>
        <ul>
          <li>
            <strong>Service providers / processors.</strong> Hosting, API,
            email delivery, push notification (e.g. Expo, Firebase Cloud
            Messaging), and realtime audio infrastructure providers that process
            data on our instructions.
          </li>
          <li>
            <strong>Other users.</strong> Profile and channel information you
            choose to use in the product (such as display name or public ID) may
            be visible to people in shared channels or who receive your invite
            links. Live audio is heard by participants in the channel session.
          </li>
          <li>
            <strong>Legal and safety.</strong> We may disclose information if
            required by law, regulation, legal process, or to protect the rights,
            safety, and security of Raydio, users, or the public.
          </li>
          <li>
            <strong>Business transfers.</strong> If we are involved in a merger,
            acquisition, financing, or sale of assets, information may be
            transferred as part of that transaction under appropriate safeguards.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Permissions on your device">
        <p>
          Depending on your platform, Raydio may request:
        </p>
        <ul>
          <li>
            <strong>Microphone</strong> — required to transmit your voice during
            live talk
          </li>
          <li>
            <strong>Notifications</strong> — optional; used for alerts related to
            the Service
          </li>
          <li>
            <strong>Network / foreground service (Android)</strong> — to keep
            live listening/talk stable while the app is in use or in the
            background as disclosed in the app
          </li>
        </ul>
        <p>
          You can revoke permissions in your device settings. Some features will
          not work without the related permission.
        </p>
      </LegalSection>

      <LegalSection title="7. Data retention">
        <p>
          We retain account and channel data while your account is active and as
          needed to provide the Service. Soft-deleted accounts and related data
          may be retained for a limited period for security, fraud prevention,
          backup integrity, or legal compliance, then deleted or anonymized.
        </p>
        <p>
          Push tokens are kept while associated with an active device/session and
          refreshed or removed when invalid. Operational logs are retained for a
          limited period consistent with security and debugging needs.
        </p>
      </LegalSection>

      <LegalSection title="8. Account deletion">
        <p>
          You may delete your account from the Raydio app (Profile → Delete
          account), subject to product rules (for example, you may need to delete
          channels you own first). Account deletion removes or schedules removal
          of your account data from active systems as described above.
        </p>
        <p>
          You can also request deletion by emailing{" "}
          <a href="mailto:hello@raydio.live">hello@raydio.live</a> from the email
          address on your account.
        </p>
      </LegalSection>

      <LegalSection title="9. Security">
        <p>
          We use reasonable technical and organizational measures designed to
          protect personal data, including encrypted transport (HTTPS/TLS) for
          API traffic and secure on-device storage for session tokens where the
          platform supports it. No method of transmission or storage is 100%
          secure; we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="10. International transfers">
        <p>
          We may process and store information in countries other than where you
          live, including where our providers operate. Where required, we take
          steps to protect cross-border transfers in accordance with applicable
          law.
        </p>
      </LegalSection>

      <LegalSection title="11. Children">
        <p>
          Raydio is not directed to children under 13 (or the minimum age
          required in your country). We do not knowingly collect personal
          information from children. If you believe a child has provided us data,
          contact us and we will take appropriate steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="12. Your rights">
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or export your personal data, or to object to or restrict
          certain processing. To exercise these rights, email{" "}
          <a href="mailto:hello@raydio.live">hello@raydio.live</a>. You may also
          use in-app account deletion where available.
        </p>
        <p>
          If you are in the EEA/UK, you may lodge a complaint with your local
          data protection authority. If you are in California or another region
          with similar laws, you may have additional rights regarding sale/share
          of personal information; Raydio does not sell personal information.
        </p>
      </LegalSection>

      <LegalSection title="13. Third-party services">
        <p>
          Raydio relies on infrastructure providers for hosting, authentication
          email, push delivery, and realtime media. Those providers process data
          under their own terms and privacy policies when they act as independent
          controllers, or under our instructions when they act as processors.
        </p>
      </LegalSection>

      <LegalSection title="14. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the
          updated version at{" "}
          <a href="https://raydio.live/privacy">raydio.live/privacy</a> and
          revise the “Last updated” date. Material changes may also be
          communicated in-app or by email where appropriate. Continued use of the
          Service after an update means you accept the revised policy, to the
          extent permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact">
        <p>
          Questions about this Privacy Policy or your data:
          <br />
          Email: <a href="mailto:hello@raydio.live">hello@raydio.live</a>
          <br />
          Website: <a href="https://raydio.live">https://raydio.live</a>
        </p>
      </LegalSection>
    </LegalDoc>
  );
}
