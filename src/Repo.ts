import {ToDo} from './ToDo';

export class Repo {

    todos : ToDo[];

    constructor() {
        this.todos = [];
    }

    public get() : ToDo[] {
        return this.todos;
    }

    public add(todo : ToDo) : void {
        this.todos.push(todo);
    }
}