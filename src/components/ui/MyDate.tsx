import { getDateNow } from "../../utils/getDate";

export default function MyDate() {
    const date = getDateNow();
    return (
        <div className="text-center">
            <h3 className="uppercase font-bold desktop:hidden dark:text-lightBase">
                To-do List
            </h3>
            <h4 className="">
                {date.year}, {date.month} {date.day}
            </h4>
        </div>
    );
}
