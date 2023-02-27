import { Component } from '@angular/core';
import { ExchangeApiDataService } from './exchange-api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //<router-outlet></router-outlet>
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exchange-converter';
  exchangeJson: any = [];

  base = 'USD';
  currency2 = 'USD';
  result: string = '1';

  changeBase(a:string){
    this.base = a;
    
  }

  toCurrency(b:string){
    this.currency2 = b;
    
  }

  constructor(private exchange: ExchangeApiDataService){ }
    convert(){
      // console.log(this.base);
      // console.log(this.currency2);
      this.exchange.getExchangeConverterData(this.base).subscribe(data =>{
        //console.log(data);
        this.exchangeJson = JSON.stringify(data);
        //console.log(this.exchangeJson);
        this.exchangeJson = JSON.parse(this.exchangeJson);
        console.log(this.exchangeJson);

        if(this.currency2 == 'USD'){
          this.result = this.exchangeJson.rates.USD
        };
        if(this.currency2 == 'BRL'){
          this.result = this.exchangeJson.rates.BRL
        };
        if(this.currency2 == 'EUR'){
          this.result = this.exchangeJson.rates.EUR
        };
        if(this.currency2 == 'GBP'){
          this.result = this.exchangeJson.rates.GBP
        };         
      });      
    }  
}
