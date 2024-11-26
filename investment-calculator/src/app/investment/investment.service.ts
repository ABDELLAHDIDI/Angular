import {  Injectable, signal } from "@angular/core";
import { InvestmentModel, ResultInvestmentData } from "./investment.model";


@Injectable({
    providedIn: 'root'
})


export class InvestmentService { 

    resultData = signal<ResultInvestmentData[] | undefined>(undefined) ; 

    calculateInvestmentResults(investment: InvestmentModel) {
        const annualData = [];
        let investmentValue = investment.initialInvestment;
      
        for (let i = 0; i < investment.duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (investment.expectedReturn / 100);
          investmentValue += interestEarnedInYear + investment.annualInvestment;
          const totalInterest =
            investmentValue - investment.annualInvestment * year - investment.initialInvestment;
          annualData.push({
            // year: year,
            // interest: +(interestEarnedInYear.toFixed(2)),
            // valueEndOfYear: +(investmentValue.toFixed(2)),
            // annualInvestment: investment.annualInvestment,
            // totalInterest: +(totalInterest.toFixed(2)),
            // totalAmountInvested: investment.initialInvestment +investment. annualInvestment * year,
            year: year,
            interest: interestEarnedInYear , 
            valueEndOfYear: investmentValue,
            annualInvestment: investment.annualInvestment,
            totalInterest: totalInterest , 
            totalAmountInvested: investment.initialInvestment +investment. annualInvestment * year,
          });
        }
      this.resultData .set( annualData);
        return annualData;
      }
}