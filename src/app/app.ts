import { Component, signal } from '@angular/core';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './language-selector/language-selector';

@Component({
  selector: 'app-root',
  imports: [
    TransactionListComponent,
    TranslateModule,
    LanguageSelectorComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('budget-management');
}
