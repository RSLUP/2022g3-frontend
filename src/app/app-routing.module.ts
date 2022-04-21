// core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './module/pages/home/home.component';
import { SingleFoodItemComponent } from './module/pages/single-food-item/single-food-item.component';
import { CheckOutComponent } from './module/pages/check-out/check-out.component';
import { LoginComponent } from './module/auth/login/login.component';
import { SignupComponent } from './module/auth/signup/signup.component';
import { PageNotFoundComponent } from './module/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'home/main-menu', component: HomeComponent},
  {path: 'home/menu-item', component: SingleFoodItemComponent},
  {path: 'home/check-out', component: CheckOutComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},

  // fallback when no prior route is matched
  {path: '**', redirectTo: 'page-not-found', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
