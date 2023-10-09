import { ChangeEvent } from "react";

type Props = {
    type: "text" | "search" | "date";
    placeholder?: string;
    name?: string;
    defaultValue?: string;
    "aria-label"?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function MyInput(attr: Props) {
    return (
        <input
            className="p-3 pr-9 rounded-lg bg-lightSecond dark:bg-darkSecond outline-none w-full shadow-md placeholder:text-sm"
            {...attr}
        />
    );
}
