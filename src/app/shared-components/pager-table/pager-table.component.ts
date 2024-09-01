import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pager-table',
  templateUrl: './pager-table.component.html',
  styleUrl: './pager-table.component.scss',
})
export class PagerTableComponent implements OnInit, OnChanges {
  countPage = 1;

  @Input() currentPage = 1;
  @Input() limit: number = 5;
  @Input() totalItems: number = 0;
  @Output() onPageChange = new EventEmitter<number>();

  ngOnInit(): void {
    this.countPage = Math.round(this.totalItems / this.limit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['limit']) {
      this.countPage = Math.round(this.totalItems / this.limit);
    }
  }

  onClick(pageNumber: number) {
    this.onPageChange.emit(pageNumber);
  }
}
