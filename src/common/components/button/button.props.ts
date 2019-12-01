import { ReactNode } from "react";

type ButtonProps = {
  type:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  outline: boolean;
  size?: "sm" | "lg";
  className?: string;
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled: boolean;
};

export default ButtonProps;
