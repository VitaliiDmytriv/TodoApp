import { Form, useNavigation, useSubmit } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";

function Searchbar({ ...props }) {
    const submit = useSubmit();
    const navigation = useNavigation();

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q");

    return (
        <Form id="search-form" role="search">
            <input
                {...props}
                placeholder="Search task"
                id="q"
                className="searchbar input"
                type="search"
                name="q"
                aria-label="search tasks"
                onChange={(e) => submit(e.target.form)}
            />
            {/* <div id="search-spinner" aria-hidden hidden={!searching}></div> */}
            <span
                className={`search-spinner ${searching ? "show" : ""}`}
                aria-hidden
            >
                <TfiReload />
            </span>
            <span
                className={`search-icon ${!searching ? "show" : ""}`}
                aria-hidden
            >
                <IoSearchOutline />
            </span>
        </Form>
    );
}

export default Searchbar;
