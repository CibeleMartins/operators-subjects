import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueCoinsComponent } from './components/value-coins/value-coins.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { ConversionDashboardComponent } from './components/conversion-dashboard/conversion-dashboard.component';
import { HomeComponent } from './pages/home/home.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CryptoInfosComponent } from './components/crypto-infos/crypto-infos.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './services/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ValueCoinsComponent,
    GraphicComponent,
    ConversionDashboardComponent,
    HomeComponent,
    CryptoInfosComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
