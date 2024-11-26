import {  Injectable } from "@angular/core";
import { InvestmentModel } from "./investment.model";


@Injectable({
    providedIn: 'root'
})


export class InvestmentService { 

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
            year: year,
            interest: Number(interestEarnedInYear.toFixed(2)),
            valueEndOfYear: Number(investmentValue.toFixed(2)),
            annualInvestment: investment.annualInvestment,
            totalInterest: Number(totalInterest.toFixed(2)),
            totalAmountInvested: investment.initialInvestment +investment. annualInvestment * year,
          });
        }
      
        return annualData;
      }
}