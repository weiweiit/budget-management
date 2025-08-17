import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionTableColumn } from './models';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Select, SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AddTransactionDialog } from './add-transaction-dialog/add-transaction-dialog';

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
    TranslateModule,
    AddTransactionDialog,
    Select,
  ],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss',
})
export class TransactionListComponent implements OnInit {
  globalTableSearchValue: string | undefined;

  transactionAmountFilterValues: number[] = [0, 10000];
  transactionAmountFilterMinValue = 0;
  transactionAmountFilterMaxValue = 10000;

  transactionCategoryFilterOptions: string[] = [];

  transactions: Transaction[] = [];

  transactionTableColumns: TransactionTableColumn[] = [
    { field: 'name', header: 'Name' },
    { field: 'amount', header: 'Amount' },
    { field: 'category', header: 'Category' },
  ];

  ngOnInit() {
    this.transactions = [
      {
        name: 'aaa',
        amount: -100,
        category: 'vida loca',
      },
      {
        name: 'aba',
        amount: 1000,
        category: 'oui oui baguette',
      },
      {
        name: 'abc',
        amount: 2561,
        category: 'vida loca',
      },
    ];

    this.setMinMaxTransactionAmountFilterValues();
    this.setDefaultTransactionCategoryFilterOptions();
  }

  resetFilters(table: Table) {
    table.clear();
    this.globalTableSearchValue = '';
  }

  setMinMaxTransactionAmountFilterValues() {
    const transactionAmounts = this.transactions.map(
      (transaction) => transaction.amount,
    );
    this.transactionAmountFilterMinValue = Math.min(...transactionAmounts);
    this.transactionAmountFilterMaxValue = Math.max(...transactionAmounts);
    this.transactionAmountFilterValues = [
      this.transactionAmountFilterMinValue,
      this.transactionAmountFilterMaxValue,
    ];
  }

  setDefaultTransactionCategoryFilterOptions() {
    this.transactionCategoryFilterOptions = [
      ...new Set(this.transactions.map((item) => item.category)),
    ];
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.setMinMaxTransactionAmountFilterValues();
    this.setDefaultTransactionCategoryFilterOptions();
  }
}
