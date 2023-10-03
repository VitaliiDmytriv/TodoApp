/* eslint-disable react/prop-types */
function SideBar({ children, side, handleClick, sideBars }) {
    const sideBarClassName = `sideBar ${side} ${
        sideBars[side] ? "active" : ""
    }`;
    const sideBarWrapperClassName = `sideBar__wrapper ${
        sideBars[side] ? "active" : ""
    } `;

    return (
        <aside className={sideBarClassName}>
            <div
                onClick={() => handleClick(side, false)}
                className={sideBarWrapperClassName}
            >
                <div
                    className="sideBar__content"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
