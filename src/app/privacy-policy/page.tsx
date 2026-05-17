import { redirect } from "next/navigation";

export default function PrivacyPolicyPageRedirect() {
  redirect("/disclosure?tab=privacy");
}
