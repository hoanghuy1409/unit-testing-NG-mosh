import { from, empty, throwError } from "rxjs";

import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";

describe("TodosComponent", () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it("should set todos property with the items returned from the service", () => {
    let todos = [1, 2, 3];

    spyOn(service, "getTodos").and.callFake(() => {
      return from([todos]);
    });
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });

  it("should call the server to save the changes when a new when a new todo item is added", () => {
    let spy = spyOn(service, "add").and.callFake(t => {
      return empty();
    });
    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it("should add a new todo returned from the server", () => {
    let todo = { id: 1 };

    spyOn(service, "add").and.returnValue(from([todo]));
    component.add();

    expect(component.todos.indexOf(todo)).not.toBe(-1);
  });

  it("should set the message property if server returns an error when adding a new todo", () => {
    let error = "error from the server";

    spyOn(service, "add").and.returnValue(throwError(error));
    component.add();

    expect(component.message).toBe(error);
  });
});
