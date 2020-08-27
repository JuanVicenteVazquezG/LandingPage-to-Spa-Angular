import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PruebaComponent } from './components/prueba/prueba.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    PruebaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
