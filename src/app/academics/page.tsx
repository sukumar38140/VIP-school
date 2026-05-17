import { redirect } from "next/navigation";

export default function AcademicsPageRedirect() {
  redirect("/about?tab=academics");
}
