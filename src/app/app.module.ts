import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import { MyCompComponent } from './my-comp/my-comp.component';
import {Calendar, CalendarModule, FullCalendar, FullCalendarModule} from 'primeng';
import { HomeComponent } from './home/home.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    HomeComponent,
    Step1Component,
    Step2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'myComp', component: MyCompComponent },
      ],
    }),
    FormlyPrimeNGModule,
    CalendarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
