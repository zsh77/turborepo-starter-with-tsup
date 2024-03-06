import { CounterButton } from "@repo/ui/CounterButton";
import { Link } from "@repo/ui/Link";
import { log } from "@repo/utils/logger";

export const metadata = {
  title: "",
};

export default function Store(): JSX.Element {
  log("Hey! This is the nextjs-app.");

  return (
    <div className="container">
      <h1 className="title">Next.js App</h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
