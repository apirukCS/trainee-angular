import { Component, OnInit } from '@angular/core';
import { Product, ResponseProduct } from '../services/product/product.model';
import { ProductService } from '../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService, private route: Router) {}
  products!: ResponseProduct;
  params = {page: 1, limit: 5};
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(this.params).subscribe((response) => {
      if (response) {
        this.products = response;
      }
    });
  }

  onPageTableChange(pageNumber: number){
    this.params = {...this.params,page: pageNumber};
    this.getProducts();
  }

  onLogout(){
    sessionStorage.clear();
    this.route.navigate(['login']);
  }
}
