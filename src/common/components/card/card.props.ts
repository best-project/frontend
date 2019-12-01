import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
    fitMode: boolean;
    title?: string;
    tooltip?: ReactNode;
};

export default CardProps;
