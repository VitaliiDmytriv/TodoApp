import { useState } from "react";
import SideBar from "../components/sideBar";
import Header from "../components/header";
import "../components/components.scss";
import "../components/ui/ui.scss";
import { Outlet, useLoaderData } from "react-router-dom";
import { LEFT, RIGHT } from "../utils/index";
import { getTasks } from "../utils/tasks";

export async function loader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");
    const tasks = await getTasks(query);
    // console.log(tasks);
    return { tasks, query };
}

function Root() {
    const [sideBars, setSideBars] = useState({
        [LEFT]: false,
        [RIGHT]: false,
    });
    const { tasks, query } = useLoaderData();

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
                    <Header query={query} />
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
