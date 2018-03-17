import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {

  constructor() { }

  getTodos(){
    return this.todos;
  }

  todos:Todo[]=[
    {
      text:"Yapılacak 1",
      createdDate:new Date()
    },
    {
      text:"Yapılacak 2",
      createdDate:new Date()
    }
]

  addTodo(obj){
    this.todos.push(obj);

  }

  removeTodo(todo:Todo){
    let index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
}
