import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRete} from "../module/rete";

@Injectable({
  providedIn: 'root'
})
export class ReteService {

  constructor(private http: HttpClient) {
  }

  getRete(): Observable<IRete> {
    return this.http.get<IRete>('https://api.fastforex.io/fetch-all?api_key=df965fab20-d9c96be8b8-rbqklt')
  }

  makeConvert(firstCur: string, secondCur: string, amount: string): Observable<any> {
    return this.http.get<any>(`https://api.fastforex.io/convert?from=${firstCur}&to=${secondCur}&amount=${amount}&api_key=df965fab20-d9c96be8b8-rbqklt`)
  }

  getDollar(): Observable<any> {
    return this.http.get<any>(`https://api.fastforex.io/fetch-one?from=USD&to=UAH&api_key=df965fab20-d9c96be8b8-rbqklt`)
  }

  getEuro(): Observable<any> {
    return this.http.get<any>(`https://api.fastforex.io/fetch-one?from=EUR&to=UAH&api_key=df965fab20-d9c96be8b8-rbqklt`)
  }

}
