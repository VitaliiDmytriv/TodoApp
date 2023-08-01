// eslint-disable-next-line react/prop-types
function Tooltip({ children, datahover }) {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <span datahover={datahover} className="tooltip">
            {children}
        </span>
    );
}

export default Tooltip;
