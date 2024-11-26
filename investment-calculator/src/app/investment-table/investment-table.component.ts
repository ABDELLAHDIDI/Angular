import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ResultInvestmentData } from '../investment/investment.model';
import { InvestmentService } from '../investment/investment.service';

@Component({
  selector: 'app-investment-table',
  standalone: false , 
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css'
})
export class InvestmentTableComponent {


private investmentSevbice = inject(InvestmentService) ; 

//this is pssible
// get resultInvestmentData  ()  { return  this.investmentSevbice.resultData }; 

//an other way for signals

// resultInvestmentData = 
// computed(()=>  this.investmentSevbice.resultData() )
 
// also this works 

resultInvestmentData =  this.investmentSevbice.resultData.asReadonly();
  

  
  


}
