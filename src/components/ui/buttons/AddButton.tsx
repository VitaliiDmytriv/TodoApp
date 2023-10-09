import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function AddButton({ children }: Props) {
    return (
        <button
            aria-label="Add new Task"
            className="bg-lightSecond text-lightTxtBase dark:text-darkTxtBase dark:bg-darkSecond px-6 py-3 rounded-lg shadow-md hidden sm:inline-block"
        >
            {children}
        </button>
    );
}
