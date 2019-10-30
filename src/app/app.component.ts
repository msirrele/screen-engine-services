import { Component, OnInit } from '@angular/core';
import { ScreenEngineProductsService } from './screen-engine-services.service';
import { RestApiService } from './rest-api.service';
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
  chartType = 'PieChart';
  ratingsData: any = [];
  ratingsColumnNames = ['Rating', 'Count'];
  report: any;
  structuredReport: any;
  constructor(
    private sepService: ScreenEngineProductsService,
    private rApi: RestApiService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getMaleReport();
  }

  getProducts() {
    this.sepService.getProducts().subscribe(res => {
      return (this.products = res);
    });
  }

  selectCategory(details: any) {
    this.selectedCategoryServices = details.services;
    this.selectedCategory = details.name;
  }

  getMaleReport() {
    this.rApi
      .getTvCommericalReportByGender()
      .subscribe(res => {
        return (this.ratingsData = res);
      });
  }
}
