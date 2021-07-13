import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html'
})
export class InputTableComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string ='';

  debounce: Subject<string> = new Subject();

  query: string = '';

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(
        value => { this.onDebounce.emit(this.query) });
  }

  search() {
    this.onEnter.emit(this.query);
  }

  keyPresed() {
    this.debounce.next(this.query);
  }

  constructor() { }


}

