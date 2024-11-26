
export interface  InvestmentModel{
    initialInvestment : number ;
    duration : number ;
    annualInvestment: number ; 
    expectedReturn: number ; 
    
}


export interface  ResultInvestmentData {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}