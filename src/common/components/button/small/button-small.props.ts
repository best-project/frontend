import { ReactNode } from "react";

type ButtonSmallProps = {
  className?: string;
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  isDisabled: boolean;
}

export default ButtonSmallProps;