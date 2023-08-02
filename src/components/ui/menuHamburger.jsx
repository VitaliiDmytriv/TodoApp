import { RiMenu2Fill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function MenuHamburger({ ...props }) {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <button className={`menuHamburger`} {...props}>
            <RiMenu2Fill />
        </button>
    );
}

export default MenuHamburger;
