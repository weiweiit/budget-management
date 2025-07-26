export enum TransactionCategory {
  Income = 'INCOME',
  Expense = 'EXPENSE',
}

export interface Transaction {
  name: string;
  amount: number;
  date: Date;
  type: TransactionCategory;
}
