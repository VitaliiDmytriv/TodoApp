import MyButton from "./ui/myButton";
import DateNow from "./ui/date";
import Notification from "./ui/notofication";
import MenuHamburger from "./ui/menuHamburger";
import Tooltip from "./ui/tooltip";
import Searchbar from "./ui/searchBar";

function Header() {
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
                    <Notification />
                    <MyButton>Add new task</MyButton>
                    <p>icon</p>
                </div>
                <div className="header__search">
                    <Searchbar />
                </div>
            </div>
        </header>
    );
}

export default Header;
