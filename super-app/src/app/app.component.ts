import { Component, OnInit } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { IProduct } from './models/product';
import { Login } from './models/login';
import { ProductService } from './services/products.service';
import {ModalService} from "./services/modal.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'super-app';

  // products: IProduct[] = []
  products$: Observable<IProduct[]>
  login$: Observable<Login[]>
  sTitle =''
  loading = false

  constructor(
    private productsService: ProductService,
    public modalService: ModalService
              ) {

  }

  /**
  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(products =>{
      this.products = products
      this.loading = false
    })
  }
  */

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(()=> this.loading = false)
    )

  }

}
