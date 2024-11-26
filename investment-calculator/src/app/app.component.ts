import { Component } from '@angular/core'; 
import { HeaderComponent } from "./header/header.component";
import { InvestmentComponent } from "./investment/investment.component";
import { ResultInvestmentData } from './investment/investment.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, InvestmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';
  resultInvestment = false ; 
  resultInvestmentData !: ResultInvestmentData [] ;
  onResult(resultInvestmentData: ResultInvestmentData[] ){
    if(resultInvestmentData){
    this.resultInvestment = true  ;
    this.resultInvestmentData=resultInvestmentData;
  }
  console.log('resultInvestment : ' +this.resultInvestment);
  
  }
}
