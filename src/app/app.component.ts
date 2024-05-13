import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseURL = 'http://127.0.0.1:5000/api/exchange';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable({
  providedIn: 'root'
})


export class AppComponent {
  constructor(private httpClient: HttpClient) { }
  title = 'currencyexcfrontend';
  amount!: number;
  fromCurrency: string = 'USD';
  toCurrency: string = 'SOL';
  convertedAmount!: number;

  convertCurrency() {
    this.httpClient.get<Response>(`${baseURL}?from=${this.fromCurrency}&to=${this.toCurrency}&amount=${this.amount}`).subscribe(
      response => {
        this.convertedAmount = response.amount;
      }
    );
  }
}

export interface Response {
  amount: number,
  currency: string
}
