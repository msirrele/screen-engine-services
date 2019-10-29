import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PRODUCTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class ScreenEngineProductsService {
  constructor() {}

  getProducts(): Observable<any[]> {
    return of(PRODUCTS).pipe(delay(100));
  }

  getProductCategories(): string[] {
    let categories = [];
    for (const category of PRODUCTS) {
      categories.push(category.name);
    }
    return categories;
  }
}
