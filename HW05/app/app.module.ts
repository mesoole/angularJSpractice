import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }])],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductsComponent,
    DashboardComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})

export class AppModule { }