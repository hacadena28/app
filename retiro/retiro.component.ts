import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';
@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent {
  estado: string="RetiroExitoso";
  billetes: any = []
  total:number= 0
  billetes10K:Array<number> = []
  billetes20K:Array<number> = []
  billetes50K:Array<number> = []
  billetes100K:Array<number> = []
  constructor(private servicios: ServiciosService){
    this.billetes = servicios.consultarBilletesEntregados();
    for(let i = 0;i<this.billetes[3];i++){
      
      this.billetes10K.push(1)
      this.total+=10000
    }
    for(let i = 0;i<this.billetes[2];i++){
      
      this.billetes20K.push(1)
      this.total+=20000
    }
    for(let i = 0;i<this.billetes[1];i++){
      
      this.billetes50K.push(1)
      this.total+=50000
    }
    for(let i = 0;i<this.billetes[0];i++){
      
      this.billetes100K.push(1)
      this.total+=100000
    }
  
  }
ngOnInit(): void {
 this.estado = this.servicios.obtenerEstado();
}
 
  

  cambiarEstado(estado:string){
    this.servicios.cambiarEstado(estado)
    this.estado = this.servicios.obtenerEstado();
  }
 

}
