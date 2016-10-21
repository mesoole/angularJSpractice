import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My products</h2>
    <ul class="products">
      <li *ngFor="let product of products" (click)="onSelect(product)"
      [class.selected]="product === selectedProduct">
        <span class="badge">{{product.id}}</span> {{product.name}}
      </li>
    </ul>
    <div *ngIf="selectedProduct">
      <h2>{{selectedProduct.name}} details!</h2>
      <div><label>id: </label>{{selectedProduct.id}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
    </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .Products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .Products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .Products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .Products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .Products .text {
    position: relative;
    top: -3px;
  }
  .Products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent {
  title = 'Tour of Products';
  // product = 'product1';
  // product: Product = {
  //   id: 1,
  //   name: 'Product1'
  // };
  products = PRODUCTS;

  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
export class Product {
  constructor(
    public id: number,
    public name: string) { }
}
const PRODUCTS: Product[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];