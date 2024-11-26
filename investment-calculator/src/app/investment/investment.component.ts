import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModel, ResultInvestmentData } from './investment.model';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment',
  standalone: false,
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {

initialInvestment =0;
annualInvestment=0;
expectedReturn=0;
duration=0;


constructor( private investmentService: InvestmentService ){}

onCalculate(){  
  this.investmentService.calculateInvestmentResults({
  initialInvestment : this.initialInvestment ,
  duration : this.duration ,
  annualInvestment: this.annualInvestment, 
  expectedReturn: this.expectedReturn 
 });
  
 console.log(  this.investmentService.resultData);
 
}


}
 