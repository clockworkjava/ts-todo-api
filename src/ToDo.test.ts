import { ToDo } from "./ToDo";

describe("App tests", () => {
    describe("ToDo", () => {
        let x: ToDo;

        beforeEach(() => {
            x = new ToDo("new one");
        });

        afterAll(() => {
            console.log("Done");
        });

        test("New item should not be completed", () => {
            expect(x.isDone()).toBe(false);
        });

        test("Done item should be completed", () => {
            x.complete();
            expect(x.isDone()).toBe(true);
        });
    });
});
//TS 3.5.3!!!
