import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styleUrls: ['./income-expenses.component.css'],
})
export class IncomeExpensesComponent implements OnInit {
  @Input() income: number = 0;
  @Input() expense: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
