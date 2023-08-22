export const LEFT = "left";
export const RIGHT = "right";

export function getDateNow() {
    const year = Intl.DateTimeFormat("en-US", {
        year: "numeric",
    }).format();

    const month = Intl.DateTimeFormat("en-US", {
        month: "short",
    }).format();

    const day = Intl.DateTimeFormat("en-US", {
        day: "numeric",
    }).format();

    return { year, month, day };
}

function makeFirstLetterUp(word) {
    return word[0].toUpperCase() + word.slice(1);
}

export function getTitlePage(path) {
    const splitedPath = path.split("/")[1];
    return makeFirstLetterUp(splitedPath);
}
