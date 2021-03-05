import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    IncomeExpensesComponent,
    TransactionFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
