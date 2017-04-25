import { Component } from '@angular/core';
// Import class so we can register it as a dependency injection
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  
  // No longer needed, now handled by TodoHeaderComponent
  // newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token
  // `TodoDataService` and assign it to a property 
  // called `todoDataService`
  constructor(private todoDataService: TodoDataService) {}

  // Service is know available as this.todoDataService
  // rename from toggleTodoComplete
  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

 // No longer needed, now handled by TodoHeaderComponent
 //  addTodo() {
 //   this.todoDataService.addTodo(this.newTodo);
 //   this.newTodo = new Todo();
 // }

 // Add new method to handle event emitted by TodoListHeaderComponent
 // rename from removeTodo
  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
