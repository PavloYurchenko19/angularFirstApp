import {Component, OnInit} from '@angular/core';
import {ReteService} from "../service/rete.service";

@Component({
  selector: 'app-rete',
  templateUrl: './rete.component.html',
  styleUrls: ['./rete.component.css']
})
export class ReteComponent implements OnInit {
  rete: object | any = {};
  firstCurrency: string = 'USD';
  secondCurrency: string = 'UAH';
  convertCurrency: string | number;
  convertCurrencyTwo: string | number = 1;
  firstNumber: string = '1';
  secondNumber: string;
  dollar: number;
  euro: number;

  constructor(private reteService: ReteService) {
  };

  ngOnInit(): void {
    this.reteService.getRete().subscribe(res => {
      const {results} = res;
      this.rete = Object.entries(results)
    })

    this.reteService.getDollar().subscribe(usd => {
      let currencyUsd = Object.values(usd.result)[0];
      this.dollar = currencyUsd as number
    })

    this.reteService.getEuro().subscribe(eur => {
      let currencyEur = Object.values(eur.result)[0];
      this.euro = currencyEur as number
    })

  }

  onSubmit(val: HTMLFormElement) {
    this.firstNumber = val['inputOne'].value;
    this.reteService.makeConvert(this.firstCurrency, this.secondCurrency, this.firstNumber).subscribe(value => {
      this.convertCurrency = Object.values(value.result)[0] as string
    })
  }

  onSubmitTwo(e: HTMLFormElement) {
    this.secondNumber = e['inputTwo'].value as string;
    this.reteService.makeConvert(this.secondCurrency, this.firstCurrency, this.secondNumber).subscribe(value => {
      this.convertCurrencyTwo = Object.values(value.result)[0] as string
    })
  }

  onClick(click: HTMLSelectElement) {
    this.firstCurrency = click.value;
    this.reteService.makeConvert(this.firstCurrency, this.secondCurrency, this.firstNumber).subscribe(value => {
      this.convertCurrency = Object.values(value.result)[0] as string
    })
  }

  onClickSecond(clicks: HTMLSelectElement) {
    this.secondCurrency = clicks.value
    this.reteService.makeConvert(this.firstCurrency, this.secondCurrency, this.firstNumber).subscribe(value => {
      this.convertCurrency = Object.values(value.result)[0] as string
    })
  }

}
