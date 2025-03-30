import { Component, Input, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import {ProductItemComponent} from '../product-item/product-item.component';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    ProductItemComponent,
    CommonModule
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges {
  @Input() categoryId!: number;
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnChanges(): void {
    if (this.categoryId) {
      this.productService.getProductsByCategory(this.categoryId).subscribe(data => {
        this.products = data;
      });
    }
  }
}
