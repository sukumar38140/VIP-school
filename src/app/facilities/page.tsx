import { redirect } from "next/navigation";

export default function FacilitiesPageRedirect() {
  redirect("/about?tab=facilities");
}
