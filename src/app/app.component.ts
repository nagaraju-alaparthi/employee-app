import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'employee-app';
  

 newTodo = signal('');

  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular Signals',
      completed: false
    }
  ]);
  constructor() {  } 



    totalTodos = computed(() => this.todos().length);

  completedTodos = computed(() =>
    this.todos().filter(todo => todo.completed).length
  );

  pendingTodos = computed(() =>
    this.totalTodos() - this.completedTodos()
  );

  addTodo() {

    const value = this.newTodo().trim();

    if (!value) return;

    this.todos.update(todos => [
      ...todos,
      {
        id: Date.now(),
        title: value,
        completed: false
      }
    ]);

    this.newTodo.set('');
  }

   toggleTodo(id: number) {

    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  }

    deleteTodo(id: number) {

    this.todos.update(todos =>
      todos.filter(todo => todo.id !== id)
    );
  }


  }

