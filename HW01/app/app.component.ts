import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})
export class AppComponent {
  title = 'Tour of Products';
  // product = 'product1';
  hero: Product = {
    id: 1,
    name: 'Product1'
  };
}
export class Product {
  constructor(
    public id: number,
    public name: string) { }
}