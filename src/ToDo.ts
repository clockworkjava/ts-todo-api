export class ToDo {
    private description: string;
    private done: boolean;

    constructor(desc: string) {
        this.description = desc;
        this.done = false;
    }

    public isDone(): boolean {
        return this.done;
    }

    public complete(): void {
        this.done = true;
    }

    public static isToDoData(arg: any): arg is { description: string; done?: boolean } {
        return arg.description !== undefined;
    }
}
