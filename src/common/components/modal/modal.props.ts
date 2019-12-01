import { ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
    onCloseClick: () => void;
    children: ReactNode;
    title?: string;
    size?: "sm" | "md" | "lg" | "fluid";
    cta?: ReactNode[];
    isCancelButtonVisible: boolean;
};

export default ModalProps;
