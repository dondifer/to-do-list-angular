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

  ngOnInit() {}

  constructor(public snackBar: MatSnackBar) {}

  markItemAsDone(item: any) {
    this.list[item.id].isDone = true;
    this.todoList = of(this.list);
    this.openSnackBar('Item Done!', 'Dismiss');
  }
  markItemAsNotDone(item: any) {
    this.list[item.id].isDone = false;
    this.todoList = of(this.list);
    this.openSnackBar('Item Not Done!', 'Dismiss');
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }
}
