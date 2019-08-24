import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productId;
  updateProduct;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.productId = params['id']
      this.getProduct(this.productId);
    })
  }

  getProduct(id) {
    let obs = this._httpService.getOneProduct(id);
    obs.subscribe(data => {
      this.updateProduct = data['result'];
    })
  }

  editProduct() {
    let obs = this._httpService.updateProduct(this.updateProduct);
    obs.subscribe(data => {
      if(data['results']) {
        this._router.navigate(['/products']);
      }
    })
  }

}
