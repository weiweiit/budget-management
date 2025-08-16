import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Select } from 'primeng/select';
import { TransactionCategory } from '../models';
import { TranslateModule } from '@ngx-translate/core';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-category-selector',
  imports: [Select, TranslateModule, TagModule, CommonModule],
  templateUrl: './transaction-category-selector.html',
  styleUrl: './transaction-category-selector.scss',
})
export class TransactionCategorySelector {
  transactionCategorySelectorOptions = Object.values(TransactionCategory);

  @Input() transactionCategorySelectorPlaceholder = '';

  @Output()
  transactionCategorySelectorEvent = new EventEmitter<string>();

  emitTransactionCategorySelectorValue(transactionCategory: string) {
    this.transactionCategorySelectorEvent.emit(transactionCategory);
  }
}
