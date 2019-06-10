import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './app.routes';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    ArtistaComponent,
    NavbarComponent,
    RecomendacionesComponent,
    TarjetasComponent,
    NoimagePipe,
    LoadingComponent,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

