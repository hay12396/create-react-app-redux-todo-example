import { v4 } from "node-uuid";
import { TodoItem } from "../../components/todo-page/todo/class/todo";

export default class TodosApi {
  static GetTodos(): Promise<TodoItem[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            completed: false,
            id: v4(),
            text: "Server todo 1"
          },
          {
            completed: false,
            id: v4(),
            text: "Server todo 2"
          }
        ]);
      }, 3000);
    });
  }
}
