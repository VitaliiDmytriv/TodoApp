import { Task, Data } from "../type";

export async function getTasks(q: string) {
    const response = await fetch(`http://localhost:3001/tasks?title_like=${q}`);
    const body = (await response.json()) as unknown;
    assertIsTasks(body);
    return body;
}

export function assertIsTasks(data: unknown): asserts data is Task[] {
    if (!Array.isArray(data)) {
        throw new Error("posts isn't array");
    }
    if (data.length === 0) {
        return;
    }

    data.forEach((task) => {
        if (!("id" in task)) {
            throw new Error("task doesn't contain id");
        }
        if (typeof task.id !== "number") {
            throw new Error("id is not a number");
        }
        if (!("title" in task)) {
            throw new Error("task doesn't contain title");
        }
        if (typeof task.title !== "string") {
            throw new Error("title is not a string");
        }
    });
}

export function assertIsData(data: unknown): asserts data is Data {
    if (typeof data !== "object") {
        throw new Error("Data isn't an object");
    }
    if (data === null) {
        throw new Error("Data is null");
    }
    if (!("tasks" in data)) {
        throw new Error("data doesn't contain tasks");
    }
}
