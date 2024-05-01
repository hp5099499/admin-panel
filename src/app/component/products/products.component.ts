import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as bootstrap from "bootstrap";
import { deleteModel } from 'mongoose';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productForm!: FormGroup;
  constructor() {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setForm();
  }
  setForm() {
    this.productForm = new FormGroup({
      productId: new FormControl(''),
      productName: new FormControl(''),
      productPrice: new FormControl(''),
      productQuantity: new FormControl(''),

    })

  }
  productlist: any = [];


  submit() {
    this.productlist.push(this.productForm.value)
    console.log(" Product added successfully", this.productlist);
    this.closeModal('addproduct');
  }
  //modal open method
  index: any;
  openModal(modalId: any, index: any) {
if(modalId=="updateproduct"){
  this.productForm = new FormGroup({
    productId: new FormControl(this.productlist[index].productId),
    productName: new FormControl(this.productlist[index].productName),
    productPrice: new FormControl(this.productlist[index].productPrice),
    productQuantity: new FormControl(this.productlist[index].productQuantity),
  })
}

    console.log(index);
    this.index = index;
    const modalElement: any = document.getElementById(modalId);
    const modal = new bootstrap.Modal(modalElement);

    modal.show();

  }
  closeModal(modalId: any) {
    const modalElement: any = document.getElementById(modalId);
    const modal = bootstrap.Modal.getInstance(modalElement);
    if(modal){
      modal.hide();
    }
  }
  delete() {
    console.log(this.index)
    this.productlist.splice(this.index, 1);
    this.closeModal('deleteModal')
  }
  update() { 
    console.log(this.productForm.value)
    this.productlist[this.index].productId=this.productForm.value.productId;
    this.productlist[this.index].productName=this.productForm.value.productName;
    this.productlist[this.index].productPrice=this.productForm.value.productPrice;
    this.productlist[this.index].productQuantity=this.productForm.value.productQuantity;
  this.closeModal('updateproduct')
  }

}

