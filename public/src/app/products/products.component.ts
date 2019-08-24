import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts;
  newReview;
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let obs = this._httpService.getAllProducts();
    obs.subscribe(data => {
      if(data['results']){
        this.allProducts = data['results'];
      }
    })
  }

  review() {
    this.newReview = {
      rating: 1,
      comment: ""
    }
  }

  createReview(id) {
    let obs = this._httpService.createReview(id, this.newReview);
    obs.subscribe(data => {
      if(data['results']) {
        this.getProducts();
        this.newReview = null;
      }
    })
  }

  deleteOne(id) {
    let obs = this._httpService.destroyProduct(id);
    obs.subscribe(data => {
      if(data['results']) {
        this.getProducts();
      }
    })
  }

}
