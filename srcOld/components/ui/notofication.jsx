import { IoIosNotifications } from "react-icons/io";

function Notification() {
    return (
        <span className="notification">
            <IoIosNotifications
                style={{ color: "inherit", fontSize: "inherit" }}
            />
        </span>
    );
}

export default Notification;
