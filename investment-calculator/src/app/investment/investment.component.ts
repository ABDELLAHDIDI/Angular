import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModel, ResultInvestmentData } from './investment.model';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {

initialInvestment =0;
annualInvestment=0;
expectedReturn=0;
duration=0;

@Output() result = new EventEmitter<ResultInvestmentData[]>();

constructor( private investmentService: InvestmentService ){}

onCalculate(){ 
 const result =  this.investmentService.calculateInvestmentResults({
  initialInvestment : this.initialInvestment ,
  duration : this.duration ,
  annualInvestment: this.annualInvestment, 
  expectedReturn: this.expectedReturn 
 });
  this.result.emit(result);
  
}


}
 