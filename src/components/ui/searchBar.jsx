import { Form, useNavigation, useSubmit } from "react-router-dom";

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
                className="searchbar"
                type="search"
                name="q"
                aria-label="search tasks"
                onChange={(e) => submit(e.target.form)}
            />
            <div id="search-spinner" aria-hidden hidden={!searching}></div>
        </Form>
    );
}

export default Searchbar;
