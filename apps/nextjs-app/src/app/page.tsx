import { log } from "@repo/utils/logger";
import HomePage from "@nextjs-app/modules/homePage/homePage";

export const metadata = {
  title: "",
};

export default function Page(): JSX.Element {
  log("Hey! This is the nextjs-app.");

  return <HomePage />;
}
