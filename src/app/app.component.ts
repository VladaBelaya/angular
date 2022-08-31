import {Component, OnInit} from '@angular/core';
import {IProduct} from './modules/product';
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my first angular project'
  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(private ProductsService: ProductsService) {
  }
  ngOnInit(): void {
    this.loading = true
    this.products$ = this.ProductsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.ProductsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }
}
