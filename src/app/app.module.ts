import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { IncomeExpensesComponent } from './income-expenses/income-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    IncomeExpensesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
