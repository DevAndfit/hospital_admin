import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
	 NoPageFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	 PagesModule,
	 AuthModule,
	 NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
