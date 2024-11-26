import { Component } from '@angular/core'; 
import { HeaderComponent } from "./header/header.component";
import { InvestmentComponent } from "./investment/investment.component";
import { ResultInvestmentData } from './investment/investment.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentTableComponent } from "./investment-table/investment-table.component";

@Component({
  selector: 'app-root',
  standalone: false  , 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';

}
