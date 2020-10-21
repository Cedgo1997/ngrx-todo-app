import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';



@NgModule({
  declarations: [TodoAddComponent, TodoFooterComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
