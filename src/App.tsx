import { useState } from "react";
import { SideBarsState, SideBarType } from "./type";
import SideBar from "./components/SideBar";

const defaultBarsState = {
    isActive: false,
    isLeftBar: false,
    isRigthBar: false,
};

function App() {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [{ isActive, isLeftBar, isRigthBar }, setSideBars] =
        useState<SideBarsState>(defaultBarsState);

    const isDarkMode = isDark ? "dark" : "";

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

    //!********* next step, make sidebars fixed after 1280px

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
                <section className="px-8 pt-5 pb-16 col-start-2 ">
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
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                        animi ducimus sint excepturi! Cum, sequi similique ipsa eius nisi
                        nostrum quos deserunt dolorem magni voluptate minus totam maiores
                        ab fugiat incidunt, sunt veniam possimus ipsam ipsum, consectetur
                        facilis veritatis! Distinctio consequatur est explicabo amet illo
                        iste quae ea? Quaerat eius aspernatur necessitatibus asperiores
                        rem perferendis aut sit perspiciatis quibusdam pariatur minima
                        enim sint nulla, dolores nesciunt iste autem beatae, architecto
                        ipsum. Hic tempore ipsam assumenda eaque perferendis, atque
                        corrupti quas quo animi at accusantium similique, quae repellat
                        dolorem totam inventore tenetur ipsum dolore enim consectetur
                        cumque. Id, animi! Vitae debitis dolor fugit blanditiis iure
                        similique repellat et ipsa nulla maxime quia id error corrupti
                        quisquam, dolores porro est in quaerat! Veritatis perspiciatis
                        velit reprehenderit corrupti ipsum, sequi recusandae accusamus
                        commodi deserunt eveniet saepe repellat quasi qui, suscipit harum
                        obcaecati voluptas iste? Animi velit omnis, culpa ratione
                        molestias officia a dignissimos sequi reiciendis dicta
                        necessitatibus consequuntur doloremque molestiae voluptatum, iusto
                        expedita saepe porro sapiente eligendi incidunt consectetur non
                        rem labore vel. Saepe fugiat ea obcaecati temporibus et aliquam,
                        praesentium labore quaerat dicta illo odit quasi nemo quam atque
                        consectetur excepturi quis ad minus iure quibusdam quia. Libero,
                        corporis cum porro asperiores, velit aperiam optio explicabo
                        voluptate nisi, fuga nesciunt nobis possimus ipsum neque magni at.
                        Quae similique officia mollitia, totam corrupti quod laboriosam
                        maiores suscipit consequuntur aliquam, debitis deserunt vel
                        explicabo laudantium harum possimus error temporibus sunt, a ipsum
                        libero! Voluptatem mollitia quis, assumenda non asperiores amet
                        maxime unde tempore neque consequatur necessitatibus, inventore
                        atque vel hic magnam itaque et ea nobis! Doloremque quaerat iure
                        nostrum? Ut cum nostrum quisquam dolorum consequatur quis
                        dignissimos suscipit veritatis, quod id doloribus repellat magnam
                        doloremque molestias porro maxime. Libero ipsum molestias
                        consequatur quod deserunt fugiat sint deleniti ducimus sunt minus
                        officiis quisquam, cupiditate repellat iste ullam repudiandae eum.
                        Sit corporis quia, veritatis necessitatibus molestias ipsa magni
                        fuga fugiat impedit quod incidunt totam omnis fugit dolores, culpa
                        rem voluptatibus recusandae hic suscipit illo eaque possimus. Aut
                        sunt neque a labore, accusamus maxime nam culpa asperiores ut
                        impedit ab dolorem. Labore accusamus tempora voluptatem quia
                        cumque, odio quae possimus dolor doloribus fuga. Voluptatum
                        quisquam minus repellendus, consequuntur praesentium quibusdam
                        officia perspiciatis sunt! Rerum, magnam! Inventore autem esse
                        voluptate illum distinctio vel aliquam, ullam, eum assumenda,
                        voluptas veritatis reiciendis tenetur! Quos accusamus omnis
                        quaerat doloremque sapiente dolor incidunt culpa laboriosam
                        praesentium, officiis libero fugiat temporibus repellendus vero
                        facere cumque molestias voluptatem tenetur ducimus cum
                        necessitatibus. Fugit nobis, vitae nulla totam libero odio
                        veritatis! Doloribus dicta eos, quibusdam sed quae porro. Eius
                        nisi quae dolores eveniet voluptates nihil est similique
                        quibusdam! Recusandae dolorem tenetur blanditiis voluptates
                        officia molestias, tempore sunt quaerat eum ab modi obcaecati
                        quibusdam aperiam atque vero perspiciatis doloribus placeat, fugit
                        facilis repellendus, perferendis labore. Maxime ipsum incidunt
                        minus id nihil, recusandae velit ipsam rerum error esse aut saepe,
                        soluta distinctio? Repellendus similique inventore, illo id
                        voluptatem ut maxime quasi officia architecto. Minima illo facilis
                        aut, deserunt ullam fugit repellat dolorem! Neque nobis ex
                        exercitationem commodi.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                        animi ducimus sint excepturi! Cum, sequi similique ipsa eius nisi
                        nostrum quos deserunt dolorem magni voluptate minus totam maiores
                        ab fugiat incidunt, sunt veniam possimus ipsam ipsum, consectetur
                        facilis veritatis! Distinctio consequatur est explicabo amet illo
                        iste quae ea? Quaerat eius aspernatur necessitatibus asperiores
                        rem perferendis aut sit perspiciatis quibusdam pariatur minima
                        enim sint nulla, dolores nesciunt iste autem beatae, architecto
                        ipsum. Hic tempore ipsam assumenda eaque perferendis, atque
                        corrupti quas quo animi at accusantium similique, quae repellat
                        dolorem totam inventore tenetur ipsum dolore enim consectetur
                        cumque. Id, animi! Vitae debitis dolor fugit blanditiis iure
                        similique repellat et ipsa nulla maxime quia id error corrupti
                        quisquam, dolores porro est in quaerat! Veritatis perspiciatis
                        velit reprehenderit corrupti ipsum, sequi recusandae accusamus
                        commodi deserunt eveniet saepe repellat quasi qui, suscipit harum
                        obcaecati voluptas iste? Animi velit omnis, culpa ratione
                        molestias officia a dignissimos sequi reiciendis dicta
                        necessitatibus consequuntur doloremque molestiae voluptatum, iusto
                        expedita saepe porro sapiente eligendi incidunt consectetur non
                        rem labore vel. Saepe fugiat ea obcaecati temporibus et aliquam,
                        praesentium labore quaerat dicta illo odit quasi nemo quam atque
                        consectetur excepturi quis ad minus iure quibusdam quia. Libero,
                        corporis cum porro asperiores, velit aperiam optio explicabo
                        voluptate nisi, fuga nesciunt nobis possimus ipsum neque magni at.
                        Quae similique officia mollitia, totam corrupti quod laboriosam
                        maiores suscipit consequuntur aliquam, debitis deserunt vel
                        explicabo laudantium harum possimus error temporibus sunt, a ipsum
                        libero! Voluptatem mollitia quis, assumenda non asperiores amet
                        maxime unde tempore neque consequatur necessitatibus, inventore
                        atque vel hic magnam itaque et ea nobis! Doloremque quaerat iure
                        nostrum? Ut cum nostrum quisquam dolorum consequatur quis
                        dignissimos suscipit veritatis, quod id doloribus repellat magnam
                        doloremque molestias porro maxime. Libero ipsum molestias
                        consequatur quod deserunt fugiat sint deleniti ducimus sunt minus
                        officiis quisquam, cupiditate repellat iste ullam repudiandae eum.
                        Sit corporis quia, veritatis necessitatibus molestias ipsa magni
                        fuga fugiat impedit quod incidunt totam omnis fugit dolores, culpa
                        rem voluptatibus recusandae hic suscipit illo eaque possimus. Aut
                        sunt neque a labore, accusamus maxime nam culpa asperiores ut
                        impedit ab dolorem. Labore accusamus tempora voluptatem quia
                        cumque, odio quae possimus dolor doloribus fuga. Voluptatum
                        quisquam minus repellendus, consequuntur praesentium quibusdam
                        officia perspiciatis sunt! Rerum, magnam! Inventore autem esse
                        voluptate illum distinctio vel aliquam, ullam, eum assumenda,
                        voluptas veritatis reiciendis tenetur! Quos accusamus omnis
                        quaerat doloremque sapiente dolor incidunt culpa laboriosam
                        praesentium, officiis libero fugiat temporibus repellendus vero
                        facere cumque molestias voluptatem tenetur ducimus cum
                        necessitatibus. Fugit nobis, vitae nulla totam libero odio
                        veritatis! Doloribus dicta eos, quibusdam sed quae porro. Eius
                        nisi quae dolores eveniet voluptates nihil est similique
                        quibusdam! Recusandae dolorem tenetur blanditiis voluptates
                        officia molestias, tempore sunt quaerat eum ab modi obcaecati
                        quibusdam aperiam atque vero perspiciatis doloribus placeat, fugit
                        facilis repellendus, perferendis labore. Maxime ipsum incidunt
                        minus id nihil, recusandae velit ipsam rerum error esse aut saepe,
                        soluta distinctio? Repellendus similique inventore, illo id
                        voluptatem ut maxime quasi officia architecto. Minima illo facilis
                        aut, deserunt ullam fugit repellat dolorem! Neque nobis ex
                        exercitationem commodi.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                        animi ducimus sint excepturi! Cum, sequi similique ipsa eius nisi
                        nostrum quos deserunt dolorem magni voluptate minus totam maiores
                        ab fugiat incidunt, sunt veniam possimus ipsam ipsum, consectetur
                        facilis veritatis! Distinctio consequatur est explicabo amet illo
                        iste quae ea? Quaerat eius aspernatur necessitatibus asperiores
                        rem perferendis aut sit perspiciatis quibusdam pariatur minima
                        enim sint nulla, dolores nesciunt iste autem beatae, architecto
                        ipsum. Hic tempore ipsam assumenda eaque perferendis, atque
                        corrupti quas quo animi at accusantium similique, quae repellat
                        dolorem totam inventore tenetur ipsum dolore enim consectetur
                        cumque. Id, animi! Vitae debitis dolor fugit blanditiis iure
                        similique repellat et ipsa nulla maxime quia id error corrupti
                        quisquam, dolores porro est in quaerat! Veritatis perspiciatis
                        velit reprehenderit corrupti ipsum, sequi recusandae accusamus
                        commodi deserunt eveniet saepe repellat quasi qui, suscipit harum
                        obcaecati voluptas iste? Animi velit omnis, culpa ratione
                        molestias officia a dignissimos sequi reiciendis dicta
                        necessitatibus consequuntur doloremque molestiae voluptatum, iusto
                        expedita saepe porro sapiente eligendi incidunt consectetur non
                        rem labore vel. Saepe fugiat ea obcaecati temporibus et aliquam,
                        praesentium labore quaerat dicta illo odit quasi nemo quam atque
                        consectetur excepturi quis ad minus iure quibusdam quia. Libero,
                        corporis cum porro asperiores, velit aperiam optio explicabo
                        voluptate nisi, fuga nesciunt nobis possimus ipsum neque magni at.
                        Quae similique officia mollitia, totam corrupti quod laboriosam
                        maiores suscipit consequuntur aliquam, debitis deserunt vel
                        explicabo laudantium harum possimus error temporibus sunt, a ipsum
                        libero! Voluptatem mollitia quis, assumenda non asperiores amet
                        maxime unde tempore neque consequatur necessitatibus, inventore
                        atque vel hic magnam itaque et ea nobis! Doloremque quaerat iure
                        nostrum? Ut cum nostrum quisquam dolorum consequatur quis
                        dignissimos suscipit veritatis, quod id doloribus repellat magnam
                        doloremque molestias porro maxime. Libero ipsum molestias
                        consequatur quod deserunt fugiat sint deleniti ducimus sunt minus
                        officiis quisquam, cupiditate repellat iste ullam repudiandae eum.
                        Sit corporis quia, veritatis necessitatibus molestias ipsa magni
                        fuga fugiat impedit quod incidunt totam omnis fugit dolores, culpa
                        rem voluptatibus recusandae hic suscipit illo eaque possimus. Aut
                        sunt neque a labore, accusamus maxime nam culpa asperiores ut
                        impedit ab dolorem. Labore accusamus tempora voluptatem quia
                        cumque, odio quae possimus dolor doloribus fuga. Voluptatum
                        quisquam minus repellendus, consequuntur praesentium quibusdam
                        officia perspiciatis sunt! Rerum, magnam! Inventore autem esse
                        voluptate illum distinctio vel aliquam, ullam, eum assumenda,
                        voluptas veritatis reiciendis tenetur! Quos accusamus omnis
                        quaerat doloremque sapiente dolor incidunt culpa laboriosam
                        praesentium, officiis libero fugiat temporibus repellendus vero
                        facere cumque molestias voluptatem tenetur ducimus cum
                        necessitatibus. Fugit nobis, vitae nulla totam libero odio
                        veritatis! Doloribus dicta eos, quibusdam sed quae porro. Eius
                        nisi quae dolores eveniet voluptates nihil est similique
                        quibusdam! Recusandae dolorem tenetur blanditiis voluptates
                        officia molestias, tempore sunt quaerat eum ab modi obcaecati
                        quibusdam aperiam atque vero perspiciatis doloribus placeat, fugit
                        facilis repellendus, perferendis labore. Maxime ipsum incidunt
                        minus id nihil, recusandae velit ipsam rerum error esse aut saepe,
                        soluta distinctio? Repellendus similique inventore, illo id
                        voluptatem ut maxime quasi officia architecto. Minima illo facilis
                        aut, deserunt ullam fugit repellat dolorem! Neque nobis ex
                        exercitationem commodi.
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
