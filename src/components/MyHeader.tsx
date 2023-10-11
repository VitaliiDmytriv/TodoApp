import { HiMenuAlt4 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import person from "../assets/ava.jpg";
import MyDate from "./ui/MyDate";
import SearchForm from "./ui/SearchForm";
import MainButton from "./ui/buttons/MainButton";
import { useSideBarsContext } from "../hooks/useSideBarsContext";
import { useModalFormContext } from "../hooks/useModalFormContext";
import MyModal from "./ui/MyModal";
import Shade from "./ui/Shade";

export default function MyHeader() {
    const { dispatch } = useSideBarsContext();
    const { isActive: isModalActive, dispatch: modalDispatch } = useModalFormContext();

    return (
        <>
            {isModalActive && (
                <Shade isHidden={false} onClick={() => modalDispatch({ type: "close" })}>
                    <MyModal>
                        <h1>Helo world</h1>
                    </MyModal>
                </Shade>
            )}
            <header className="grid grid-cols-header-3x items-center gap-3 mb-5 transition-all text-lightTxtBase dark:text-darkTxtBase text-sm text-icons tablet:grid-cols-header-4x tablet:gap-0">
                <button
                    className=" mr-5"
                    aria-label="Open Menu"
                    onClick={() => dispatch({ type: "open", side: "left" })}
                >
                    <HiMenuAlt4 size="1.5rem" alt="Menu Icon" />
                </button>
                <div className="col-span-full row-start-2 relative tablet:row-start-1 tablet:col-span-1 tablet:col-start-2">
                    <SearchForm />
                    <div className="absolute top-1/2 -translate-y-1/2 right-3">
                        <CiSearch size="1.3rem" />
                    </div>
                </div>
                <div className="justify-self-center">
                    <MyDate />
                </div>
                <div className="justify-self-end flex items-center gap-3">
                    <button aria-label="Show notifications">
                        <IoMdNotifications size="1.5rem" alt="Notifications Icon" />
                    </button>
                    <MainButton
                        aria-label="Add new task"
                        onClick={() => modalDispatch({ type: "addTask" })}
                    >
                        Add new task
                    </MainButton>
                    <button
                        aria-label="Show person pannel"
                        className="w-10 h-10 rounded-full overflow-hidden"
                        onClick={() => dispatch({ type: "open", side: "right" })}
                    >
                        <img src={person} alt="" className="max-w-full" />
                    </button>
                </div>
            </header>
        </>
    );
}
