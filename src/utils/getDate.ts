export function getDateNow() {
    const year = Intl.DateTimeFormat("en-US", {
        year: "numeric",
    }).format();

    const month = Intl.DateTimeFormat("en-US", {
        month: "short",
    }).format();

    const day = Intl.DateTimeFormat("en-US", {
        day: "numeric",
    })
        .format()
        .padStart(2, "0");

    return { year, month, day };
}
