import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoQueueService} from './todo-queue.service';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoQueueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
