import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionCategory } from './transaction';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-list',
  imports: [
    TableModule,
    CommonModule,
    InputTextModule,
    TagModule,
    SelectModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    SliderModule,
    FormsModule,
  ],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss',
})
export class TransactionListComponent implements OnInit {
  globalTableSearchValue: string | undefined;

  transactionAmountFilterValues: number[] = [0, 10000];

  transactionCategoryFilterOptions: TransactionCategory[] = [];

  transactions: Transaction[] = [];

  ngOnInit() {
    this.transactions = [
      {
        name: 'aaa',
        amount: 100,
        date: new Date(2024),
        type: TransactionCategory.Income,
      },
      {
        name: 'aba',
        amount: 100,
        date: new Date(2024),
        type: TransactionCategory.Income,
      },
      {
        name: 'abc',
        amount: 100,
        date: new Date(2024),
        type: TransactionCategory.Expense,
      },
    ];

    this.setDefaultTransactionAmountFilterValues();
    this.setDefaultTransactionTypeFilterOptions();
  }

  resetFilters(table: Table) {
    table.clear();
    this.setDefaultTransactionAmountFilterValues();
    this.globalTableSearchValue = '';
  }

  setDefaultTransactionAmountFilterValues() {
    this.transactionAmountFilterValues = this.transactions.reduce(
      ([min, max], item) => [
        Math.min(min, item.amount),
        Math.max(max, item.amount),
      ],
      [Infinity, -Infinity],
    );
  }

  setDefaultTransactionTypeFilterOptions() {
    this.transactionCategoryFilterOptions = [
      ...new Set(this.transactions.map((item) => item.type)),
    ];
  }
}
