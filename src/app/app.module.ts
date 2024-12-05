import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IdadePipe } from './pipes/idade.pipe';
import { FiltroPetsPipe } from './pipes/filtro-pets.pipe';
import { provideHttpClient } from '@angular/common/http'; // Nova abordagem

@NgModule({
  declarations: [
    AppComponent,
    IdadePipe,
    FiltroPetsPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
