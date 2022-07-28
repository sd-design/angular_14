import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor() { }

  ngOnInit(): void {
  }
  @Input() product: IProduct
}
