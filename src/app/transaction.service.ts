import { Injectable } from '@angular/core';
import { TRANSACTIONS } from './mock-transactions';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  transactions: Transaction[] = TRANSACTIONS;
  balance: number = 0;

  constructor() {}

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getTransactionTotal(): number {
    return this.getIncomeTotal() + this.getExpenseTotal();
  }

  getIncomeTotal(): number {
    const transactionsAmount = this.transactions.map(
      (transaction) => transaction.amount
    );
    const found = transactionsAmount.find((element) => element > 0);
    if (found) {
      return transactionsAmount
        .filter((transaction) => transaction > 0)
        .reduce((acc, item) => (acc += item));
    } else {
      return 0;
    }
  }

  getExpenseTotal(): number {
    const transactionsAmount = this.transactions.map(
      (transaction) => transaction.amount
    );
    const found = transactionsAmount.find((element) => element < 0);
    if (found) {
      return transactionsAmount
        .filter((transaction) => transaction < 0)
        .reduce((acc, item) => (acc += item));
    } else {
      return 0;
    }
  }

  deleteTransaction(transaction: Transaction): Transaction[] {
    this.transactions = this.transactions.filter(
      (t) => t.id !== transaction.id
    );

    return this.transactions;
  }

  addTransaction(transaction: Transaction): void {
    transaction.id = this.genId(this.transactions);
    this.transactions.push(transaction);
  }

  genId(transactions: Transaction[]): number {
    return transactions.length > 0
      ? Math.max(...transactions.map((transaction) => transaction.id)) + 1
      : 1;
  }
}
