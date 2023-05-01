import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component'; 
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { BoldDirective } from './bold.directive';
import { ListComponentComponent } from './Components/list-component/list-component.component';
import { MatButtonModule } from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,   
    HeaderComponent,
    BoldDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
