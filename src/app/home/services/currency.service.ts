import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICodesResponse, ICurrency } from '../models/currency';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private httpClient: HttpClient) {}

  getCurriencies() {
    return this.httpClient.get<ICurrency[]>(
      `https://concurrency-api.onrender.com/api/v1/currencies`
    );
  }

  postCurriencies(codes: string[]) {
    return this.httpClient.post<ICodesResponse>(
      `https://concurrency-api.onrender.com/api/v1/currencies/comparison`,
      {
        base_code: 'USD',
        target_codes: codes,
      }
    );
  }

  getCurrenciesValues() {
    let result: any[] = [];
    return this.getCurriencies().pipe(
      switchMap((e) => {
        const codes = e.map((e) => e.code);
        result = e;
        return this.postCurriencies(codes);
      }),
      map((d) => {
        result = result.map((e) => ({
          ...e,
          value: d.conversion_rates[e.code],
        }));
        return result;
      })
    );
  }
}
