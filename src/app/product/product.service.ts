import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.apiUrl + "product/all");
  }

  getById(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + "product/" + id);
  }

  getBySearchCriteria(value: string): Observable<any> {
    return this.http.get(environment.apiUrl + "product/criteria/" + value);
  }

  getAllByCategoryAndFilters(categoryIds: any, countryIds: any, slider: any, rating: any): Observable<any> {
    let params = this.setParams(countryIds, slider, rating);
    if (categoryIds != null) params = params.append('categoryIds', categoryIds.map(c => c.id));
    return this.http.get(environment.apiUrl + "product/category", {params});
  }

  getAllBySubcategoryAndFilters(subcategoryIds: any, countryIds: any, slider: any, rating: any): Observable<any> {
    let params = this.setParams(countryIds, slider, rating);
    if (subcategoryIds != null) params = params.append('subcategoryIds', subcategoryIds.map(s => s.id));
    return this.http.get(environment.apiUrl + "product/subcategory", {params});
  }

  setParams(countryIds: any, slider: any, rating: any): HttpParams {
    let params = new HttpParams();
    if (countryIds != null) params = params.append('countryIds', countryIds.map(c => c.id));
    if (slider != null) params = params.append('price', slider);
    if (rating != null) params = params.append('averageReview', rating);
    return params;
  }

}
