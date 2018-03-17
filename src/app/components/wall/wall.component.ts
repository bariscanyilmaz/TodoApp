import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  todos:Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todos=this.todoService.getTodos();
  }

  addTodo(Todotext:HTMLInputElement){

    let obj={
      text:Todotext.value,
      createdDate:new Date()
    };
    this.todoService.addTodo(obj);
    Todotext.value="";
  }

  removeTodo(todo:Todo){
    this.todoService.removeTodo(todo);
  }
}
