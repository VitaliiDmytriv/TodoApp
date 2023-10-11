import { ReactNode } from "react";
import { SideBarType } from "../type";

type Props = {
    side: SideBarType;
    isSideActive: boolean;
    children: ReactNode;
};

function SideBar({ children, isSideActive, side }: Props) {
    const leftCss = { dynamic: "translate-x-0", static: `left-0 -translate-x-full` };
    const rightCss = { dynamic: "translate-x-2", static: `right-0 translate-x-full` };

    const cssClasse = side === "left" ? leftCss : rightCss;

    return (
        <aside
            className={`${isSideActive && cssClasse.dynamic} ${
                cssClasse.static
            } h-full bg-lightSecond dark:bg-darkSecond p-5 w-200px fixed transition-all top-0 z-10 desktop:translate-x-0 desktop:w-13%`}
        >
            {children}
        </aside>
    );
}

export default SideBar;
