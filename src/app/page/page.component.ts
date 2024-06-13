import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  base: string = 'USD';
  target: string = 'EUR';
  amount: number = 1;
  result: number | undefined;
  errorMessage: string | undefined;

  ip1: string = '';
  ip2: string = '';


  exchangeRates: { [key: string]: number } = {
    'USD_EUR': 1 / 0.85,
    'EUR_USD': 1 * 1.18,
    'USD_GBP': 1 / 0.75,
    'GBP_USD': 1 * 1.33,
    'EUR_GBP': 1 / 0.88,
    'GBP_EUR': 1 * 1.14,
    'INR_USD': 1 * 85,
    'USD_INR': 1 / 85,
    'INR_EUR': 1 * 90, 
    'EUR_INR': 1 / 90,   
    'INR_GBP': 1 * 106, 
    'GBP_INR': 1 / 106,         // Calculating GBP to INR through USD and EUR

  };

  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR'];





  onIp1Change(value: string): void {
    this.ip1 = value;
    this.updateIp2();
    this.convert();
  }

  onIp2Change(value: string): void {
    this.ip2 = value;
    this.updateIp1();
    this.convert();
  }





  onBaseChange(value: string): void {
    if (value === this.target) {
      this.errorMessage = 'Currencies cannot be the same.';
      // Clear inputs or handle error as needed
    } else {
      this.base = value;
      this.updateIp2(); // Update ip2 whenever the base currency changes
      this.convert(); // Update the result whenever base currency changes
      this.errorMessage = undefined;
    }
  }

  onTargetChange(value: string): void {
    if (value === this.base) {
      this.errorMessage = 'Currencies cannot be the same.';
      // Clear inputs or handle error as needed
    } else {
      this.target = value;
      this.updateIp1(); // Update ip1 whenever the target currency changes
      this.convert(); // Update the result whenever target currency changes
      this.errorMessage = undefined;
    }
  }

  updateIp2(): void {
    const conversionKey = `${this.target}_${this.base}`;
    const rate = this.exchangeRates[conversionKey];
    const parsedValue = parseFloat(this.ip1);
    if (!isNaN(parsedValue) && rate) {
      this.ip2 = (parsedValue * rate).toString();
    } else {
      this.ip2 = '';
    }
  }

  updateIp1(): void {
    const conversionKey = `${this.base}_${this.target}`;
    const rate = this.exchangeRates[conversionKey];
    const parsedValue = parseFloat(this.ip2);
    if (!isNaN(parsedValue) && rate) {
      this.ip1 = (parsedValue / rate).toString();
    } else {
      this.ip1 = '';
    }
  }

  convert(): void {
    if (this.base === this.target) {
      this.errorMessage = 'BOTH currencies cannot be the same.';
      this.result = undefined;
    } else {
      const conversionKey = `${this.base}_${this.target}`;
      const rate = this.exchangeRates[conversionKey];

      if (rate) {
        this.result = this.amount * rate;
        this.errorMessage = undefined;
      } else {
        this.result = undefined;
        this.errorMessage = 'Invalid currency conversion.';
      }
    }
  }
}  
