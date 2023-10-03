// eslint-disable-next-line react/prop-types
function Tooltip({ children, tooltipText }) {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <span data-tooltip={tooltipText} className="tooltip">
            {children}
        </span>
    );
}

export default Tooltip;
