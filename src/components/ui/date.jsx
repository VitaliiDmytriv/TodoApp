import { getDateNow } from "../../utils";

function DateNow() {
    const date = getDateNow();

    return (
        <div className="date">
            <h3 className="date__title">To-do List</h3>
            <h4 className="date__numbers">
                {date.year}, {date.month} {date.day}
            </h4>
        </div>
    );
}

export default DateNow;
