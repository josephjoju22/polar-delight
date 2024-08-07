import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolarDelightComponent } from './components/polar-delight/polar-delight.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'polar-delight', component: PolarDelightComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

