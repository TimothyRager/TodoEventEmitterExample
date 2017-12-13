import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import {TodoQueueService} from '../todo-queue.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Output()
  clockChange:EventEmitter<string> = new EventEmitter();

  clockTime = " set ";

  observer = {
    next:(value) => {
      this.clockTime = value;
      this.clockChange.emit(this.clockTime);
    },
    error:function(value){

    },
    complete:function(){
      console.log("Done");
    }
  }

  constructor(private todo:TodoQueueService) { }

  ngOnInit() {
    this.todo.getTodos().subscribe(this.observer);
  }

}
