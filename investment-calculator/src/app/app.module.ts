import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { InvestmentTableComponent } from "./investment-table/investment-table.component";
import { InvestmentComponent } from "./investment/investment.component";
import { HeaderComponent } from "./header/header.component";


@NgModule({
    declarations:[HeaderComponent, InvestmentComponent,  InvestmentTableComponent , AppComponent] , 
    bootstrap : [AppComponent],
    imports: [ FormsModule , BrowserModule ],
})

export class AppModule{}