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
    const filteredList = this.transactions.filter(
      (t) => t.id !== transaction.id
    );
    this.updateTransactions(filteredList);
    return filteredList;
  }

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  updateTransactions(transactions: Transaction[]): void {
    this.transactions = transactions;
  }
}
