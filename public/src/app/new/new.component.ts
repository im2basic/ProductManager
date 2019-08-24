import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newProduct = {
      title:'',
      price: 1,
      imageUrl: ''
    }
  }

  createProduct() {
    let obs = this._httpService.createProduct(this.newProduct)
    obs.subscribe( data => {
      if(data['results']) {
        this.newProduct = {
          title:'',
          price: 1,
          imageUrl: ''
        }
        this._router.navigate(['/products']);
      }
      else {
        if(data['errors']['title']) {
          this.errors.push(data['errors']['title']['message'])
          
        }
        if(data['errors']['price']) {
          this.errors.push(data['errors']['price']['message'])

        }
        if(data['errors']['imageUrl']) {
          this.errors.push(data['errors']['imageUrl']['message'])

        }
      }
    })
  }

}
