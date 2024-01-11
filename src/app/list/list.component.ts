import { Component, OnInit } from '@angular/core';
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
  todoList: Observable<Todo[]> = of([
    { id: 1, content: 'compras', isDone: false },
    { id: 1, content: 'pasear perro', isDone: false },
  ]);

  ngOnInit() {}
}
