import { Injectable } from '@angular/core';

const TASKS = [
  { title: 'HTML', isDone: true },
  { title: 'RUBY ON RAILS', isDone: true },
  { title: 'ANGULAR', isDone: false },
  { title: 'JQUERY', isDone: false },
];
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  get() {
    return new Promise(resolve => (TASKS));
  }
}
