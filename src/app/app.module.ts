import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatInputModule, 
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatDialogModule } from '@angular/material'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
