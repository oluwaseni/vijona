import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VijonaComponent } from './vijona/vijona.component';
import { OluwaseniComponent } from './oluwaseni/oluwaseni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VijonaComponent,
    OluwaseniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
