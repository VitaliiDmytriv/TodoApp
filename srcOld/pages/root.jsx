import { useState } from "react";
import SideBar from "../components/sideBar";
import Header from "../components/header";
import "../components/components.scss";
import "../components/ui/ui.scss";
import { Outlet, useLoaderData } from "react-router-dom";
import { LEFT, RIGHT, getTitlePage } from "../utils/index";
import { getTasks } from "../utils/tasks";
import Title from "../components/ui/title";
import Filter from "../components/ui/filter";

export async function loader({ request }) {
    const url = new URL(request.url);
    const title = url.pathname === "/" ? "All" : getTitlePage(url.pathname);
    const query = url.searchParams.get("q");
    const tasks = await getTasks(query);
    return { tasks, query, title };
}

function Root() {
    const [sideBars, setSideBars] = useState({
        [LEFT]: false,
        [RIGHT]: false,
    });
    const [isGrid, setIsGrid] = useState(false);
    const { query, title } = useLoaderData();

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
                    <Header
                        query={query}
                        handleSidebarClick={handleSidebarClick}
                    />
                    <Title>{title} tasks (count of tasks)</Title>
                    <Filter isGrid={isGrid} setIsGrid={setIsGrid} />
                    <section className={`outlet__view ${isGrid ? "grid" : ""}`}>
                        <Outlet />
                    </section>
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
