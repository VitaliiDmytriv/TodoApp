const options = [
    "Sort by",
    "Order added",
    "Earlier first",
    "Later first",
    "Completed first",
    "Uncompleted First",
];

function MySelect() {
    return (
        <select className="input" name="" id="" defaultValue={"Sort by"}>
            {options.map((option, id) => {
                return (
                    <option key={id} value={option} disabled={id === 0}>
                        {option}
                    </option>
                );
            })}
        </select>
    );
}

export default MySelect;
