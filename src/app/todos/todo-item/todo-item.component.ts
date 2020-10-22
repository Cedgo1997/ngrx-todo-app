import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('fisicTxtInput') fisicTxtInput: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;

  editing: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;

    setTimeout(() => {
      this.fisicTxtInput.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.editing = false;
  }
}
