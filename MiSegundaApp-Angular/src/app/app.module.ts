import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { EventosComponent } from './components/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
