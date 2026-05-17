import { redirect } from "next/navigation";

export default function ResultsPageRedirect() {
  redirect("/about?tab=results");
}
