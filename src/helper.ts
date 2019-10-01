import { ToDo } from "./ToDo";

export class Helper {
    public otherMethod(): Object {
        return {};
    }

    public callExternal(normalize: (data: Object) => ToDo[]): ToDo[] {
        //call external service and get data
        const data = [{}, {}];
        return normalize(data);
    }
}
