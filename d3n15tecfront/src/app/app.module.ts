import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RestaurantListingModule } from './components/restaurant-listing/restaurant-listing.module';
import { HttpClientModule } from '@angular/common/http';
import { FoodCatalogueModule } from './components/food-catalogue/food-catalogue.module';
import { OrderSummaryModule } from './components/order-summary/order-summary.module';
import { LoginComponent } from './components/login/components/login.component';
import { RegisterComponent } from './components/register/components/register.component';
import { WelcomeComponent } from './components/welcome/components/welcome.component';
import { FormsModule } from '@angular/forms';
import { TamplateModule } from './components/tamplate/tamplate.module';
import { LayoutComponent } from './components/layout/components/layout.component';
import { BodyModule } from './components/body/body.module';
import { FooterModule } from './components/footer/footer.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileComponent } from './components/profile/components/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    LayoutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RestaurantListingModule,
    HttpClientModule,
    FoodCatalogueModule,
    OrderSummaryModule,
    FormsModule,
    TamplateModule,
    BodyModule,
    FooterModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
