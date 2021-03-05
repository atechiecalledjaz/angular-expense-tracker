import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  @Output() newTransactionEvent = new EventEmitter<Transaction>();

  form = new FormGroup({
    text: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
  });

  constructor(private transactionsService: TransactionService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.newtransaction();
    this.reset();
  }

  newtransaction(): void {
    this.newTransactionEvent.emit(this.form.value);
  }

  reset() {
    this.form.reset();
  }
}
