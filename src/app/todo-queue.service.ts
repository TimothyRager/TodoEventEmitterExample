import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class TodoQueueService {

  private todos: Observable<Date>;


  constructor() {
    this.todos = Observable.interval(500)
                  .map(tick => new Date());
  }

  getTodos(): Observable<Date> {
    return this.todos;
  }

}
