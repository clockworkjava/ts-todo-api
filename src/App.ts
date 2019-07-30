import express from 'express';
import { Repo } from './Repo';
import { resolvePtr } from 'dns';
import { ToDo } from './ToDo';

class App {

    private server : express.Express;
    private repo : Repo;

    constructor() {
        this.server = express();
        this.repo = new Repo();
        this.server.use(express.json());
    }

    public start() : void {
        this.server.listen(9555, () => console.log("Server started : 9555"));

        this.server.get("/", (req, rsp) => {
            let todos : ToDo[] = this.repo.get();
            rsp.send(todos);
        });

        this.server.get("/test", (req, rsp) => {
            this.repo.todos.forEach( todo => console.log(todo.isDone()));
        });

        this.server.post("/", (req, rsp) => {

            if(ToDo.isToDoData(req.body)) {
                const todo : ToDo = new ToDo(req.body.description);
                this.repo.add(todo);
            } else {
                throw Error("Wrong data");
            }
        });
    }

    
}

const todo : App = new App();
todo.start();