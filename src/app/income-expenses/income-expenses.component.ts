import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css'],
})
export class IncomeExpensesComponent implements OnInit {
  @Input() income: number = 0;
  @Input() expense: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}
}
