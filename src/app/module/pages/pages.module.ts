import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { SingleFoodItemComponent } from './single-food-item/single-food-item.component';
// import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckOutComponent,
    SingleFoodItemComponent
  ]
})
export class PagesModule { }
