import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';
@Component({
  selector: 'app-menu-billetes',
  templateUrl: './menu-billetes.component.html',
  styleUrls: ['./menu-billetes.component.css']
})
export class MenuBilletesComponent {
 
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
