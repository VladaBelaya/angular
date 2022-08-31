import {Component, OnInit} from '@angular/core';
import {IProduct} from './modules/product';
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my first angular project'
  products: IProduct[] = []
  loading = false

  constructor(private ProductsService: ProductsService) {
  }
  ngOnInit(): void {
    this.loading = true
    this.ProductsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }
}
