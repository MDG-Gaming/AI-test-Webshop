import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Shoespeed – Run faster');
}
