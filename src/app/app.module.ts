import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptionComponent } from './reception/reception.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  entryComponents:[],
  declarations: [
    AppComponent,
    ReceptionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
