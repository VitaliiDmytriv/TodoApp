import { useState } from "react";
import SideBar from "../components/sideBar";
import Header from "../components/header";
import "../components/components.scss";
import "../components/ui/ui.scss";
import { Outlet } from "react-router-dom";

const LEFT = "left";
const RIGHT = "right";

function Root() {
    const [sideBars, setSideBars] = useState({
        [LEFT]: false,
        [RIGHT]: false,
    });

    function handleSidebarClick(side, boolean) {
        setSideBars({ ...sideBars, [side]: boolean });
    }

    return (
        <section className="layout">
            <div className="layout__grid">
                <SideBar
                    sideBars={sideBars}
                    handleClick={handleSidebarClick}
                    side={LEFT}
                ></SideBar>
                <section className="content">
                    <Header />
                    <Outlet />
                </section>
                <SideBar
                    sideBars={sideBars}
                    handleClick={handleSidebarClick}
                    side={RIGHT}
                ></SideBar>
            </div>
        </section>
    );
}

export default Root;
