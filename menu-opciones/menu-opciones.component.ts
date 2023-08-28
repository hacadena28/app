import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';


@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.css']
})
export class MenuOpcionesComponent {
  
  estado: string="Menu";
  constructor(private servicios: ServiciosService){
  }
ngOnInit(): void {
 this.estado = this.servicios.obtenerEstado();
}
 
  

  cambiarEstado(estado:string){
    console.log("menu opciones activo");
    
    this.servicios.cambiarEstado(estado)
    this.estado = this.servicios.obtenerEstado();
  }
}
