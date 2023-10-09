import { useSearchParams, useSubmit } from "react-router-dom";
import { FormEvent, ChangeEvent } from "react";
import MyInput from "./MyInput";

export default function SearchForm() {
    // SearchParams
    const [searchParams, setSearchParams] = useSearchParams();
    const submit = useSubmit();

    // Handle search submit and update "setSearchParams" for upload new data from the server
    function handleSearchChange(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const q = formData.get("q") as string;
        setSearchParams({ q });
    }
    return (
        <form role="search" onSubmit={handleSearchChange}>
            <MyInput
                type="search"
                placeholder="Search task"
                name="q"
                defaultValue={searchParams.get("q") ?? ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    submit(e.currentTarget.form)
                }
            />
        </form>
    );
}
