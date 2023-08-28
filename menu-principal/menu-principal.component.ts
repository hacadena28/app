import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {

  estado: string="MenuPrincipal";
  constructor(private servicios: ServiciosService){
  }
ngOnInit(): void {
 this.estado = this.servicios.obtenerEstado();
}
 
  

  cambiarEstado(estado:string){
    this.servicios.cambiarEstado(estado)
    this.estado = this.servicios.obtenerEstado();
  }




}
