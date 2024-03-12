import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolarDelightComponent } from './components/polar-delight/polar-delight.component';

const routes: Routes = [
  { path: '', redirectTo: '/polar-delight', pathMatch: 'full' },
  { path: 'polar-delight', component: PolarDelightComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

