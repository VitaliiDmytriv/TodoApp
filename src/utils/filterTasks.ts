import { Task } from "../type";

export function filterTasks(tasks: Task[], q: string): Task[] {
    return tasks.filter((task) => task.title.toLowerCase().includes(q.toLowerCase()));
}
