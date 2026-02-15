import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/modules/angular-material/angular-material.module';
import { HomeComponent } from './home/home.component';
import { CelebrateComponent } from './celebrate/celebrate.component';
import { RejectionComponent } from './rejection/rejection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CelebrateComponent,
    RejectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
