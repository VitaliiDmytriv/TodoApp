import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    "aria-label"?: string;
    onClick?: () => void;
};

export default function MainButton({ children, ...attr }: Props) {
    return (
        <button
            {...attr}
            className="bg-lightSecond text-lightTxtBase dark:text-darkTxtBase dark:bg-darkSecond px-6 py-3 rounded-lg shadow-md hidden sm:inline-block"
        >
            {children}
        </button>
    );
}
