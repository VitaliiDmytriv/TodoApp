import { useState } from "react";
import "./layout.scss";
import SideBar from "../sideBar/sideBar";
const LEFT = "left";
const RIGHT = "right";

function Layout() {
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
                <div className="content">
                    <button onClick={() => handleSidebarClick(LEFT, true)}>
                        left
                    </button>
                    <button onClick={() => handleSidebarClick(RIGHT, true)}>
                        right
                    </button>
                </div>
                <SideBar
                    sideBars={sideBars}
                    handleClick={handleSidebarClick}
                    side={RIGHT}
                ></SideBar>
            </div>
        </section>
    );
}

export default Layout;
