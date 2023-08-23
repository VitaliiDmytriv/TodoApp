// eslint-disable-next-line react/prop-types
function Task({ children }) {
    return (
        <article className="task bxsh">
            <div>{children}</div>
        </article>
    );
}

export default Task;
