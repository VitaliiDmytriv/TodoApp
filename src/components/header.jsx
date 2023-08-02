import MyButton from "./ui/myButton";
import DateNow from "./ui/date";
import Notification from "./ui/notofication";
import MenuHamburger from "./ui/menuHamburger";
import Tooltip from "./ui/tooltip";
import Searchbar from "./ui/searchBar";
import { LEFT, RIGHT } from "../utils/index";

// eslint-disable-next-line react/prop-types
function Header({ query, handleSidebarClick }) {
    return (
        <header className="header">
            <div className="header__grid">
                <div className="header__hamburger">
                    <Tooltip datahover="show sidebar">
                        <MenuHamburger
                            onClick={() => handleSidebarClick(LEFT, true)}
                        />
                    </Tooltip>
                </div>
                <div className="header__date">
                    <DateNow />
                </div>
                <div className="header__action">
                    <Tooltip datahover="see notifications">
                        <Notification />
                    </Tooltip>
                    <MyButton>Add new task</MyButton>
                    <button
                        onClick={() => handleSidebarClick(RIGHT, true)}
                        className="btnIcon"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/114427441?v=4"
                            alt=""
                        />
                    </button>
                </div>
                <div className="header__search">
                    <Searchbar defaultValue={query} />
                </div>
            </div>
        </header>
    );
}

export default Header;
