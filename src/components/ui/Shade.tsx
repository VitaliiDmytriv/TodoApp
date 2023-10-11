import { ReactNode } from "react";

type Props = {
    onClick: () => void;
    isHidden: boolean;
    children?: ReactNode;
};

export default function Shade({ onClick, isHidden, children }: Props) {
    const cssStyle = isHidden ? "desktop:hidden" : "";
    return (
        <div
            onClick={onClick}
            className={`absolute left-0 right-0 bottom-0 top-0 bg-shadow z-10 ${cssStyle}`}
        >
            {children}
        </div>
    );
}
