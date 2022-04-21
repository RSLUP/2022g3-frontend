// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './module/pages/home/home.component';
import { HeaderComponent } from './module/shared/header/header.component';
import { FooterComponent } from './module/shared/footer/footer.component';
import { MainMenuComponent } from './module/pages/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
