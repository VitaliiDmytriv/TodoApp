import MyButton from "./ui/myButton";
import DateNow from "./ui/date";
import Notification from "./ui/notofication";
import MenuHamburger from "./ui/menuHamburger";
import Tooltip from "./ui/tooltip";
import Searchbar from "./ui/searchBar";

// eslint-disable-next-line react/prop-types
function Header({ query }) {
    return (
        <header className="header">
            <div className="header__grid">
                <div className="header__hamburger">
                    <Tooltip datahover="show sidebar">
                        <MenuHamburger />
                    </Tooltip>
                </div>
                <DateNow />
                <div className="header__action">
                    <Tooltip datahover="see notifications">
                        <Notification />
                    </Tooltip>
                    <MyButton>Add new task</MyButton>
                    <p>icon</p>
                </div>
                <div className="header__search">
                    <Searchbar defaultValue={query} />
                </div>
            </div>
        </header>
    );
}

export default Header;
