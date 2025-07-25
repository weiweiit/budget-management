import { Component, signal } from '@angular/core';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@Component({
  selector: 'app-root',
  imports: [TransactionListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('budget-management');
}
