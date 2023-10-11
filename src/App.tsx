import { useState, useEffect, Suspense } from "react";
import SideBar from "./components/SideBar";
import { useLoaderData, Await } from "react-router-dom";
import { assertIsData, assertIsTasks } from "./utils/getTasks";
import MyHeader from "./components/MyHeader";
import { useSideBarsContext } from "./hooks/useSideBarsContext";
import Shade from "./components/ui/Shade";
// import { useModalFormContext } from "./hooks/useModalFormContext";

function App() {
    // Theme
    const [isDark, setIsDark] = useState<boolean>(
        JSON.parse(localStorage.getItem("theme") ?? "false")
    );
    const isDarkMode = isDark ? "dark" : "";
    // SideBars
    const { dispatch, isActive, isLeftBar, isRigthBar } = useSideBarsContext();
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

    return (
        <main className={`${isDarkMode} h-full bg-slate-700`}>
            {isActive && (
                <Shade onClick={() => dispatch({ type: "close" })} isHidden={true} />
            )}

            <section className="min-h-screen h-full bg-lightBase dark:bg-darkBase desktop:grid grid-cols-3-custom relative overflow-x-hidden">
                <SideBar side="left" isSideActive={isLeftBar}>
                    chinazes
                </SideBar>

                <section className="px-3 pt-5 pb-8 col-start-2 tablet:px-8 tablet:pb-16">
                    <MyHeader />
                    <div className="mb-3 p-3 bg-slate-500">
                        <button
                            onClick={handleChangeTheme}
                            className="bg-lightPurple dark:bg-darkPurple  text-white"
                        >
                            {isDark ? "Light" : "Dark"}
                        </button>
                    </div>
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
