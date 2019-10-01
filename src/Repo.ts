import { ToDo } from "./ToDo";
import { callExternal } from "./helper";

export class Repo {
    todos: ToDo[];

    constructor() {
        this.todos = [];
    }

    public importExternal(normalize: (data: Object) => ToDo[]): void {
        callExternal(normalize).forEach(todo => this.add(todo));
    }

    public get(): ToDo[] {
        return this.todos;
    }

    public add(todo: ToDo): void {
        this.todos.push(todo);
    }
}
