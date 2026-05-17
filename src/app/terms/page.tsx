import { redirect } from "next/navigation";

export default function TermsPageRedirect() {
  redirect("/disclosure?tab=terms");
}
