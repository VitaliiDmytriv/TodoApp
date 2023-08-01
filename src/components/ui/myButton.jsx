// eslint-disable-next-line react/prop-types
function MyButton({ children, ...props }) {
    return (
        <button {...props} className="myButton">
            {children}
        </button>
    );
}

export default MyButton;
