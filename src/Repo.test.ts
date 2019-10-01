import { Repo } from "./Repo";
import { ToDo } from "./ToDo";
import { Helper } from "./helper";

// auto mock - const callExternal = jest.fn();

describe("Repository test", () => {
    // test("Importing should add items to general repository", () => {
    //     const repository: Repo = new Repo();
    //     repository.add(new ToDo("y"));
    //     const nomralizeMock = jest.fn().mockReturnValue([new ToDo("z")]);
    //     repository.importExternal(nomralizeMock);
    //     expect(repository.get()).toHaveLength(2);
    // });
    // __mocks__ dir required
    // test("Importing should add imtes to general repository, external module", () => {
    //     const repository: Repo = new Repo();
    //     repository.add(new ToDo("y"));
    //     const nomralizeMock = jest.fn().mockReturnValue([new ToDo("z")]);
    //     repository.importExternal(nomralizeMock);
    //     expect(repository.get()).toHaveLength(3);
    // });

    test("Importing should add imtes to general repository, external module", () => {
        const helper: Helper = new Helper();
        helper.otherMethod = jest.fn().mockReturnValue({ a: 5 });
        expect(helper.otherMethod()).not.toBeUndefined();
        expect(helper.callExternal((data: Object) => [])).not.toBeUndefined();
        expect(helper.otherMethod()).toMatchObject({ a: 5 });
    });
});
