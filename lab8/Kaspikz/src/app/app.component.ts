import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import {ProductListComponent} from './product-list/product-list.component';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    ProductListComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: any[] = [];
  selectedCategoryId: number | null = null;


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }
}
