import { AiOutlineStar } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { IoTrash } from "react-icons/io5";
import { BsCalendar2Week } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function Task() {
    return (
        <article className="task bxsh">
            <div className="task__info">
                <h3 className="task__title">Clean teeth</h3>
                <p className="task__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores, veritatis!
                </p>
                <div className="task__date">
                    <BsCalendar2Week className="task__dateIcon" />

                    <p>18/06/2002</p>
                </div>
            </div>
            <div className="task__action">
                <button className="task__btn btn-green">uncompleted</button>
                <div>
                    <AiOutlineStar className="task__actionIcon" />
                    <CiEdit className="task__actionIcon" />
                    <IoTrash className="task__actionIcon" />
                </div>
            </div>
        </article>
    );
}

export default Task;
