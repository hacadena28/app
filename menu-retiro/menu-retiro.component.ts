import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';
@Component({
  selector: 'app-menu-retiro',
  templateUrl: './menu-retiro.component.html',
  styleUrls: ['./menu-retiro.component.css']
})
export class MenuRetiroComponent {
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

  retirar(estado:string,cifra:number){
    alert("Retiro de : "+cifra)
    this.cambiarEstado(estado)


  }
  retirarMonto(monto:number){
    this.cambiarEstado("RetiroExitoso")
    this.servicios.RetirarSaldo(monto)

  }

}
