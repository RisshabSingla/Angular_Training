import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.scss'
})
export class RestaurantDetailsComponent {
  resId = "";
  constructor(private _ar: ActivatedRoute){
    this.resId = _ar.snapshot.params['id'];
    console.log(this.resId)
  }
}
