import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { ServiciosService } from '../servicios.service';
@Component({
  selector: 'app-retiro-distinto',
  templateUrl: './retiro-distinto.component.html',
  styleUrls: ['./retiro-distinto.component.css']
})
export class RetiroDistintoComponent {
  estado: string="Retirar";
  @Input() valor : string = '';
  
  constructor(private servicios: ServiciosService){
  }
ngOnInit(): void {
 this.estado = this.servicios.obtenerEstado();
}
 
  

  cambiarEstado(estado:string){
    this.servicios.cambiarEstado(estado)
    this.estado = this.servicios.obtenerEstado();
  }
  sumar(numero:number){

    this.valor=this.valor.toString()+numero.toString()
  }
  retirar(){
    if(this.valor == ""|| parseInt(this.valor) == 0||parseInt(this.valor)<10000){
      alert("Valor fuera de rango")
      this.valor= ""
    }else{
      if(this.valor.substring(0,1)==""||parseInt(this.valor.substring(0,1)) == 0){
        
        alert("Valor fuera de rango")
        this.valor= ""
      }else{
    this.cambiarEstado("RetiroExitoso")
    this.servicios.RetirarSaldo(parseInt(this.valor))
  }}}

  limpiarValor(){
    var str = this.valor;
 
this.valor = str.substr(0, str.length - 1);
  }
 

  
}
