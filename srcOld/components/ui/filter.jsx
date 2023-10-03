import MySelect from "./Myselect";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiGrid41 } from "react-icons/ci";
import Tooltip from "./tooltip";

// eslint-disable-next-line react/prop-types
function Filter({ isGrid, setIsGrid }) {
    function handleGrid() {
        setIsGrid((prev) => !prev);
    }

    return (
        <section className="filter">
            <div className="filter__grid">
                <div className="filter__viewGrid">
                    <Tooltip tooltipText={"view in list"}>
                        <button
                            onClick={handleGrid}
                            className={`filter__btn ${!isGrid && "active"}`}
                        >
                            <AiOutlineUnorderedList />
                        </button>
                    </Tooltip>
                    <Tooltip tooltipText={"view in grid"}>
                        <button
                            onClick={handleGrid}
                            className={`filter__btn ${isGrid && "active"}`}
                        >
                            <CiGrid41 />
                        </button>
                    </Tooltip>
                </div>
                <MySelect />
            </div>
        </section>
    );
}

export default Filter;
