import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionDashboardComponent } from './components/conversion-dashboard/conversion-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
