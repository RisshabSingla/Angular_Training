import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

const routes: Routes = [
{
    path:"",
    children: [
      {
        path:"",
        component: RestaurantComponent,
        children:[
          {
            path: "",
            component: RestaurantListComponent
          }
        ]
      },
      {
        path:"details",
        component: RestaurantDetailsComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
