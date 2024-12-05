import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IdadePipe } from './pipes/idade.pipe';
import { FiltroPetsPipe } from './pipes/filtro-pets.pipe';
import { SharedModule } from './shared/shared.module'; 
import { HttpClientModule } from '@angular/common/http'; // Importando HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    IdadePipe, // Pipe personalizada para calcular idade
    FiltroPetsPipe // Pipe para filtrar pets
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HttpClientModule // Adicionando o módulo necessário para HttpClient
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
