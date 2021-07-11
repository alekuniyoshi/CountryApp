import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html'
})
export class InputTableComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  query: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300),distinctUntilChanged())
      .subscribe(
        value => { console.log('debouncer:', value) });
  }

  search() {
    this.onEnter.emit(this.query);
  }

  keyPresed() {
    this.debouncer.next(this.query);
  }

  constructor() { }


}
function debounceTime(debounceTime: any) {
  throw new Error('Function not implemented.');
}

function distinctUntilChanged(): import("rxjs").OperatorFunction<unknown, unknown> {
  throw new Error('Function not implemented.');
}

