import { Component, OnInit, Input } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  @Input() total = 0;
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}
}
