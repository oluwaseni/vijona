import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VijonaComponent } from './vijona/vijona.component';
import { OluwaseniComponent } from './oluwaseni/oluwaseni.component';


const routes: Routes = [
  {path:'', component:OluwaseniComponent},
  {path:'vijona', component:VijonaComponent},
  {path:'oluwaseni', component:OluwaseniComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
