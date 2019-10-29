import { Component, OnInit } from '@angular/core';
import { ScreenEngineProductsService } from './screen-engine-services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'screen-engine-services';
  products: any = [];
  selectedCategory: any;
  selectedCategoryServices: any[] = [];

  constructor(
    private sepService: ScreenEngineProductsService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.sepService.getProducts().subscribe(res => {
      return this.products = res;
    });
  }

  selectCategory(details: any) {
    this.selectedCategoryServices = details.services;
    this.selectedCategory = details.name;
  }

}
