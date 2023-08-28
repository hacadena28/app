import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';
import { MenuRetiroComponent } from './menu-retiro/menu-retiro.component';
import { RetiroDistintoComponent } from './retiro-distinto/retiro-distinto.component';
import { RecargarBilletesComponent } from './recargar-billetes/recargar-billetes.component';
import { MenuBilletesComponent } from './menu-billetes/menu-billetes.component';
import { RetiroComponent } from './retiro/retiro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    MenuOpcionesComponent,
    MenuRetiroComponent,
    RetiroDistintoComponent,
    RecargarBilletesComponent,
    MenuBilletesComponent,
    RetiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
