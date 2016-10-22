import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';


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
    <my-product-detail [product]="selectedProduct"></my-product-detail>
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
`],
  providers: [ProductService]
})
export class AppComponent implements OnInit {

  

  title = 'Tour of Products';
  products : Product[];
  selectedProduct: Product;
  
  constructor(private productservice: ProductService) { }

  getProducts() : void {
    this.productservice.getProducts().then(products => this.products = products);
  }

  ngOnInit():void{
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
