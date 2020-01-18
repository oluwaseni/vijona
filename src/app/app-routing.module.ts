import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VijonaComponent } from './vijona/vijona.component';
import { OluwaseniComponent } from './oluwaseni/oluwaseni.component';
import { PiersonComponent } from './pierson/pierson.component';


const routes: Routes = [
  {path:'', redirectTo: 'oluwaseni', pathMatch:'full'},
  // {path:'', component:OluwaseniComponent},
  {path:'vijona', component:VijonaComponent},
  {path:'oluwaseni', component:OluwaseniComponent},
  {path:'pierson', component:PiersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
