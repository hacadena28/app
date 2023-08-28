import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';
@Component({
  selector: 'app-recargar-billetes',
  templateUrl: './recargar-billetes.component.html',
  styleUrls: ['./recargar-billetes.component.css']
})
export class RecargarBilletesComponent {
  estado: string="RetiroDistinto";
  constructor(private servicios: ServiciosService){
  }
ngOnInit(): void {
 this.estado = this.servicios.obtenerEstado();
}
 
  

  cambiarEstado(estado:string){
    this.servicios.cambiarEstado(estado)
    this.estado = this.servicios.obtenerEstado();
  }

  confirmarRecarga(estado: string){
alert("Recarga completada con exito")
    this.cambiarEstado(estado)

  }

}
