import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllProducts() {
    return this._http.get('/index');
  }

  getOneProduct(id) {
    return this._http.get(`/${id}`);
  }

  createProduct(newProduct) {
    return this._http.post('/create', newProduct);
  }

  createReview(id, newReview) {
    return this._http.post(`/create/review/${id}`, newReview);
  }

  updateProduct(updateProduct) {
    return this._http.post(`/update/${updateProduct._id}`, updateProduct)
  }

  destroyProduct(id) {
    return this._http.delete(`/destroy/${id}`);
  }


}
