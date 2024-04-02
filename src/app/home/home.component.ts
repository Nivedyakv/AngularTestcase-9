import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,DecimalPipe,PercentPipe,JsonPipe,SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public today: Date = new Date();
  public price: number = 1234.5678;
  public pi: number = 3.14159265359;
  public ratio: number = 0.745;
  public object = { name: 'Nivedya', age: 20, city: 'India' };
  public text = 'This is a long text and we are slicing it.';
}
