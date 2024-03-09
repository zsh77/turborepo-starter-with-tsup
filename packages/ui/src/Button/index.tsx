import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { classJoin } from "@repo/utils/classJoin";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function Button(props: IButtonProps): JSX.Element {
  const { children, ...restProps } = props;

  return (
    <button {...restProps} className={classJoin("ui-bg-red-200")}>
      {children}
    </button>
  );
}
