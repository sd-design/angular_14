import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) {
  }

  formModal = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })

  get title(){
    return this.formModal.controls.title as FormControl
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formModal.value)
    this.productService.create( {
      title: this.formModal.value as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 4.0,
        count: 1
      }
    }).subscribe(() =>{
      this.modalService.close()
    })
  }

}
