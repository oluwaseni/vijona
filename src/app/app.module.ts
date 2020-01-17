import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VijonaComponent } from './vijona/vijona.component';
import { OluwaseniComponent } from './oluwaseni/oluwaseni.component';
import { PiersonComponent } from './pierson/pierson.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VijonaComponent,
    OluwaseniComponent,
    PiersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
