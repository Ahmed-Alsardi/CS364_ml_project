import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DiabetesFormsComponent } from './diabetes-forms/diabetes-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DiabetesFormsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
