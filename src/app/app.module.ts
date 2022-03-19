import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

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
import { Ex01Component } from './views/lista02/ex01/ex01.component';
import { Ex02Component } from './views/lista02/ex02/ex02.component';
import { Ex03Component } from './views/lista02/ex03/ex03.component';
import { Ex04Component } from './views/lista02/ex04/ex04.component';
import { Ex05Component } from './views/lista02/ex05/ex05.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { ExNgif01Component } from './views/ex-ngif01/ex-ngif01.component';
import { NgforComponent } from './views/exemplo-ngfor/ngfor.component';
import { ExNgfor01Component } from './views/ex-ngfor01/ex-ngfor01.component';
import { ExemploNgsswitchComponent } from './views/exemplo-ngsswitch/exemplo-ngsswitch.component';
import { Ex1Component } from './views/prova/ex1/ex1.component';
import { Ex2Component } from './views/prova/ex2/ex2.component';
import { Ex3Component } from './views/prova/ex3/ex3.component';
import { Ex4Component } from './views/prova/ex4/ex4.component';
import { Ex5Component } from './views/prova/ex5/ex5.component';

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
    EventBidingComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    Ex05Component,
    ExemploNgifComponent,
    ExNgif01Component,
    NgforComponent,
    ExNgfor01Component,
    ExemploNgsswitchComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
