import { Injectable } from '@angular/core';
import { ResponseProduct } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as qs from 'qs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  path = 'https://dev6.resrun-pos.com/rails-api';
  constructor(private http: HttpClient) {}

  getProducts(params: any): Observable<ResponseProduct> {
    let token = sessionStorage.getItem('access_token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    let mapParams = {
      ...params,
      product_category_id: 1,
      is_show_in_pos: true,
      datatable: true
    };
    return this.http.get<ResponseProduct>(
      `${this.path}/mobile_api/product_sub_category_products?${qs.stringify(
        mapParams
      )}`,
      { headers }
    );
  }
}
