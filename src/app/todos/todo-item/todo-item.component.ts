import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { check } from '../todo.actions';

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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(check({ id: this.todo.id }));
    });
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
