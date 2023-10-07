import { useState, useEffect, FormEvent, Suspense } from "react";
import { SideBarsState, SideBarType } from "./type";
import SideBar from "./components/SideBar";
import { useSearchParams, useLoaderData, Await, useSubmit } from "react-router-dom";
import { assertIsData, assertIsTasks } from "./utils/getTasks";

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
    const isDarkMode = isDark ? "dark" : "";
    // SideBars
    const [{ isActive, isLeftBar, isRigthBar }, setSideBars] =
        useState<SideBarsState>(defaultBarsState);
    // SearchParams
    const [searchParams, setSearchParams] = useSearchParams();
    const submit = useSubmit();
    // Tasks data
    const data = useLoaderData();
    assertIsData(data);

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
    function handleSearchChange(e: FormEvent<HTMLFormElement>) {
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
                    <form onSubmit={handleSearchChange}>
                        <input
                            aria-label="Search tasks"
                            defaultValue={searchParams.get("q") ?? ""}
                            className="outline-none p-1"
                            name="q"
                            type="search"
                            onChange={(e) => submit(e.currentTarget.form)}
                        />
                    </form>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Await resolve={data.tasks}>
                            {(tasks) => {
                                assertIsTasks(tasks);
                                return tasks.map((task) => (
                                    <div key={task.id}>{task.title}</div>
                                ));
                            }}
                        </Await>
                    </Suspense>
                </section>
                <SideBar side="right" isSideActive={isRigthBar}>
                    Chinazes but from the rigth corner
                </SideBar>
            </section>
        </main>
    );
}

export default App;
