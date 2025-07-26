export enum TransactionCategory {
  Income = 'INCOME',
  Expense = 'EXPENSE',
}

export interface Transaction {
  name: string;
  amount: number;
  category: string;
}
