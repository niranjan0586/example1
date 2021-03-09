import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './service/api.service';

import { Header } from './components/header/header.component';
import { Home } from './components/home/home.component';
import { Features } from './components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Home,
    Features
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
