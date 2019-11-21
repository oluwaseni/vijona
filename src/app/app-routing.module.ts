import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VijonaComponent } from './vijona/vijona.component';


const routes: Routes = [
  {path:'', component:VijonaComponent},
  {path:'vijona', component:VijonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
