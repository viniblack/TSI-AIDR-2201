import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './views/date/date.component';
import { AboutComponent } from './views/about/about.component';
import { InterpolationComponent } from './views/interpolation/interpolation.component';
import { Exercicio1Component } from './views/exercicio1/exercicio1.component';
import { Exercicio2Component } from './views/exercicio2/exercicio2.component';
import { Exercicio3Component } from './views/exercicio3/exercicio3.component';
import { Exercicio4Component } from './views/exercicio4/exercicio4.component';
import { EventBidingComponent } from './views/event-biding/event-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AboutComponent,
    InterpolationComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    EventBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
