import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueCoinsComponent } from './components/value-coins/value-coins.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { ConversionDashboardComponent } from './components/conversion-dashboard/conversion-dashboard.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueCoinsComponent,
    GraphicComponent,
    ConversionDashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
