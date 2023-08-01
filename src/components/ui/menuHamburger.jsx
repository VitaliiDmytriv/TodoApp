import { RiMenu2Fill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function MenuHamburger({ className }) {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <span className={`menuHamburger ${className}`}>
            <RiMenu2Fill />
        </span>
    );
}

export default MenuHamburger;
