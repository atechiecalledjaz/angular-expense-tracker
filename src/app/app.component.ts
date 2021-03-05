import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  transactions: Transaction[] = [];
  balance: number = 0;
  income: number = 0;
  expense: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactions();
    this.refreshTotals();
  }

  getTransactions() {
    this.transactions = this.transactionService.getTransactions();
  }

  addTransaction(transaction: Transaction) {
    this.transactionService.addTransaction(transaction);
    this.refreshTotals();
  }

  deleteTransaction(transaction: Transaction): void {
    this.transactions = this.transactionService.deleteTransaction(transaction);
    this.refreshTotals();
  }

  refreshTotals() {
    this.income = this.transactionService.getIncomeTotal();
    this.expense = this.transactionService.getExpenseTotal();
    this.balance = this.transactionService.getTransactionTotal();
  }
}
