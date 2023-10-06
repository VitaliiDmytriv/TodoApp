import { useState, useEffect, FormEvent } from "react";
import { SideBarsState, SideBarType } from "./type";
import SideBar from "./components/SideBar";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getTasks } from "./utils/getTasks";
import { filterTasks } from "./utils/filterTasks";

const defaultBarsState = {
    isActive: false,
    isLeftBar: false,
    isRigthBar: false,
};

function App() {
    // Theme
    const [isDark, setIsDark] = useState<boolean>(
        JSON.parse(localStorage.getItem("theme") ?? "false")
    );
    // SideBars
    const [{ isActive, isLeftBar, isRigthBar }, setSideBars] =
        useState<SideBarsState>(defaultBarsState);
    // SearchParams
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQ = searchParams.get("q") ?? "";
    // ReactQuery
    const { isLoading, data: tasks } = useQuery({
        queryKey: ["search", searchQ],
        queryFn: () => getTasks(searchQ),
    });

    console.log(searchQ);

    const isDarkMode = isDark ? "dark" : "";

    // Update localeStorage theme mode when "isDark" changes
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(isDark));
    }, [isDark]);

    // Changes theme by toggle
    function handleChangeTheme() {
        setIsDark((prev) => !prev);
    }

    // Opens side bar based on what side was clicked and changes state
    function ShowSideBar(side: SideBarType) {
        if (side === "left") {
            setSideBars((prev) => ({ ...prev, isLeftBar: true, isActive: true }));
        } else {
            setSideBars((prev) => ({ ...prev, isRigthBar: true, isActive: true }));
        }
    }

    // Closes any side bar and change state
    function CloseSideBar() {
        setSideBars({ isLeftBar: false, isRigthBar: false, isActive: false });
    }

    // Handle search submit and update "setSearchParams" for upload new data from the server
    function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const q = formData.get("q") as string;
        setSearchParams({ q });
    }

    return (
        <main className={`${isDarkMode} h-full bg-slate-700`}>
            {isActive && (
                <div
                    onClick={CloseSideBar}
                    className="absolute left-0 right-0 bottom-0 top-0 bg-black opacity-20 z-20 desktop:hidden"
                ></div>
            )}
            <section className="min-h-screen h-full bg-lightBase dark:bg-darkBase desktop:grid grid-cols-3-custom relative overflow-x-hidden">
                <SideBar side="left" isSideActive={isLeftBar}>
                    chinazes
                </SideBar>
                <section className="px-3 pt-5 pb-8 col-start-2 tablet:px-8 tablet:pb-16">
                    <div className="mb-3 p-3 bg-slate-500">
                        <button
                            onClick={handleChangeTheme}
                            className="bg-lightPurple dark:bg-darkPurple  text-white"
                        >
                            {isDark ? "Light" : "Dark"}
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <button
                            onClick={() => ShowSideBar("left")}
                            className="bg-lightPurple text-white px-2"
                        >
                            Left
                        </button>
                        <button
                            onClick={() => ShowSideBar("right")}
                            className="bg-lightPurple text-white px-2"
                        >
                            rIGTH
                        </button>
                    </div>
                    <form method="get" onSubmit={handleSearchSubmit}>
                        <input
                            defaultValue={searchParams.get("q") ?? ""}
                            className="outline-none p-1"
                            name="q"
                            type="search"
                        />
                    </form>
                    <div>
                        {isLoading ? (
                            <div>Loading ...</div>
                        ) : (
                            tasks &&
                            filterTasks(tasks, searchQ).map((task) => {
                                return <div key={task.id}>{task.title}</div>;
                            })
                        )}
                    </div>
                </section>
                <SideBar side="right" isSideActive={isRigthBar}>
                    Chinazes but from the rigth corner
                </SideBar>
            </section>
        </main>
    );
}

export default App;
