import { ToDo } from "./ToDo";

test("basic", () => {
    const x: ToDo = new ToDo("new one");
    expect(x.isDone()).toBeFalsy();
    x.complete();
    expect(x.isDone()).toBeTruthy();
});
