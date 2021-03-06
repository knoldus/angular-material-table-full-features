import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
