import { isSyntaxError } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { TRANSACTIONS } from './mock-transactions';

import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionService);
    service.transactions = [...TRANSACTIONS];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the total', () => {
    expect(service.getTransactionTotal()).toEqual(420);
  });

  it('should return all transactions', () => {
    expect(service.getTransactions().length).toEqual(4);
  });

  it('should add a new transaction', () => {
    let transaction = { id: 5, text: 'Lunch', amount: -18 };
    service.addTransaction(transaction);
    expect(service.transactions.length).toEqual(5);
    expect(
      service.transactions.find(
        (element) => element.text === 'Lunch' && element.id === 5
      )
    ).toBeTruthy();
  });

  it('should delete a transaction', () => {
    let transaction = { id: 1, text: 'Flower', amount: -20 };
    service.deleteTransaction(transaction);
    expect(service.transactions.length).toEqual(3);
    expect(
      service.transactions.find(
        (element) =>
          element.text === 'Flower' &&
          element.id === 1 &&
          element.amount === -20
      )
    ).toBeFalsy();
  });
});
