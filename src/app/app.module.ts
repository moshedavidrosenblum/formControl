import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAndSheepComponent } from './comps/form-and-sheep/form-and-sheep.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponentComponent } from './comps/contact-us-component/contact-us-component.component';
import { FormGroupComponent } from './comps/form-group/form-group.component';
import { NaviFormsComponent } from './comps/navi-forms/navi-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    FormAndSheepComponent,
    ContactUsComponentComponent,
    FormGroupComponent,
    NaviFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
