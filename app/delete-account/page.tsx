import type { Metadata } from "next";
import { LegalDoc, LegalSection } from "../components/legal-doc";

export const metadata: Metadata = {
  title: "Delete Account — Raydio",
  description:
    "How to delete your Raydio account, what data is removed, and retention after deletion.",
  alternates: { canonical: "https://raydio.live/delete-account" },
};

const LAST_UPDATED = "August 2, 2026";

export default function DeleteAccountPage() {
  return (
    <LegalDoc title="Delete your Raydio account" lastUpdated={LAST_UPDATED}>
      <LegalSection title="How to delete your account">
        <p>
          You can delete your <strong>Raydio</strong> account from the mobile
          app:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open the Raydio app and sign in.</li>
          <li>Go to Profile.</li>
          <li>
            Tap <strong>Delete account</strong> and confirm when prompted.
          </li>
        </ol>
        <p>
          If you own any channels, delete them first. The app may block account
          deletion until owned channels are removed.
        </p>
        <p>
          If you no longer have the app installed, email{" "}
          <a href="mailto:hello@raydio.live">hello@raydio.live</a> from the
          email address on your account and request deletion.
        </p>
      </LegalSection>

      <LegalSection title="What is deleted">
        <p>When you delete your account, Raydio removes or schedules removal of:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Your account profile (name, email, and related profile data)</li>
          <li>Active sessions and sign-in access</li>
          <li>Push notification tokens associated with your devices</li>
          <li>
            Channel memberships, invites, and other account-linked data in the
            Service
          </li>
        </ul>
        <p>
          Deletion applies to active systems as described in our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection title="Retention after deletion">
        <p>
          Deleted accounts are soft-deleted first. Related data may be retained
          for a limited period for security, fraud prevention, backup integrity,
          or legal compliance, then deleted or anonymized.
        </p>
        <p>
          Push tokens are removed when invalid or when the associated session
          ends. Operational logs are kept only for a limited period consistent
          with security and debugging needs.
        </p>
      </LegalSection>
    </LegalDoc>
  );
}
