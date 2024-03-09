"use client";

import { Button } from "@repo/ui/Button";
import { CounterButton } from "@repo/ui/CounterButton";
import { Link } from "@repo/ui/Link";
import "./homePage.css";

export const metadata = {
  title: "",
};

export default function HomePage(): JSX.Element {
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
      <Button
        onClick={() => {
          // eslint-disable-next-line no-alert -- testing onClick function of button
          alert("this is a function");
        }}
      >
        aaa
      </Button>
    </div>
  );
}
