import localforage from "localforage";
import { matchSorter } from "match-sorter";
// import { nanoid } from "nanoid";

export async function getTasks(query) {
    await fakeNetwork(`getTasks:${query}`);
    let tasks = await localforage.getItem("tasks");
    if (!tasks) tasks = [];
    if (query) tasks = matchSorter(tasks, query, { keys: ["first", "last"] });
    return tasks;
}

// export async function createTask() {
//     await fakeNetwork();
//     const task = { id: nanoid(5), createdAt: Date.now() };
// }

export async function getTask(id) {
    await fakeNetwork(`task:${id}`);
    const tasks = await localforage.getItem("tasks");
    const task = tasks.find((task) => task.id === id);
    return task ?? null;
}

export async function updateTask(id, updates) {
    await fakeNetwork();
    const tasks = await localforage.getItem("tasks");
    const task = tasks.find((task) => task.id === id);
    if (!task) throw new Error("No task found for", id);
    Object.assign(task, updates);
    await set(tasks);
    return task;
}

export async function deleteTask(id) {
    let tasks = await localforage.getItem("tasks");
    let index = tasks.findIndex((task) => task.id === id);
    if (index > -1) {
        tasks.splice(index, 1);
        await set(tasks);
        return true;
    }
    return false;
}

function set(tasks = []) {
    return localforage.setItem("tasks", tasks);
}

let fakeCache = {};

async function fakeNetwork(key) {
    if (!key) {
        fakeCache = {};
    }

    if (fakeCache[key]) {
        return;
    }

    fakeCache[key] = true;
    return new Promise((res) => {
        setTimeout(res, Math.random() * 1000);
    });
}
