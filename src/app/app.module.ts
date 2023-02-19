import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueCoinsComponent } from './components/value-coins/value-coins.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { ConversionDashboardComponent } from './components/conversion-dashboard/conversion-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SnackbarFeedbackComponent } from './components/snackbar-feedback/snackbar-feedback.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ValueCoinsComponent,
    GraphicComponent,
    ConversionDashboardComponent,
    HomeComponent,
    SnackbarFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
