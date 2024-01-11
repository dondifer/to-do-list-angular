import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
interface Todo {
  content: string;
  id?: number;
  isDone?: boolean;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  list = [
    { id: 0, content: 'compras', isDone: false },
    { id: 1, content: 'pasear perro', isDone: false },
  ];
  todoList: Observable<Todo[]> = of(this.list);
  inputValue: Todo = {
    content: '',
  };
  undoneNumber: number = 0;

  ngOnInit() {
    this.checkUndone();
  }

  constructor(public snackBar: MatSnackBar) {}

  checkUndone() {
    let count = 0;
    this.list.forEach((el) => {
      if (!el.isDone) {
        count++;
      }
    });
    this.undoneNumber = count;
  }

  markItemAsDoneUndone(item: any, isDone: boolean) {
    this.list[item.id].isDone = isDone;
    this.emitList();
    isDone
      ? this.openSnackBar('Item Done!', 'Dismiss')
      : this.openSnackBar('Item Not Done!', 'Dismiss');
    this.checkUndone();
  }

  emitList() {
    this.todoList = of(this.list);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
    });
  }

  addNew() {
    const content = this.inputValue.content;
    if (content) {
      const id = this.list.length || 0;
      this.list.push({ id: id, content: content, isDone: false });
      this.emitList();
      this.inputValue.content = '';
      this.checkUndone();
    } else {
      this.openSnackBar('Write something!', 'Close');
    }
  }
}
