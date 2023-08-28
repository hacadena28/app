import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  constructor() {}
  estado: string = 'MenuPrincipal';
  retiro: number = 0;
  billetesEntregados: any = []
  cambiarEstado(estado: string) {
    console.log(estado);

    this.estado = estado;
  }
  obtenerEstado(): string {
    return this.estado;
  }
  obtenerSaldo(): number {
    return this.retiro;
  }
  RetirarSaldo(number: number) {
    this.billetesEntregados = calcular(number);

  }
  consultarBilletesEntregados(): any{
    return this.billetesEntregados
  }
}

function calcular(value: number):any{

  let billetesEntregados = [0, 0, 0, 0];

  let monto = value

  do{

    if( monto > 600000){
  
      calcular2(600000)
      monto = monto -600000
    }else{
      calcular2( monto)
      monto = monto - monto
    }
  }while(monto != 0)




  function calcular2(cifra:any ):any{



    let valor = cifra;
    let total = valor,
      billetes = [100000, 50000, 20000, 10000],
      entregado = 0,
      tamano = billetes.length - 1,
      recorrido = tamano,
      iteracion = 0;
    if (valor % 10000 == 0 && valor != 0 && valor > 0) {
      console.log('Valor Valido');
      while (total > 0 || entregado != valor) {
        entregar();
      }
      console.log('Total Final entregado' + entregado);
      console.log('Final Billetes entregados: ' + billetesEntregados);
      return billetesEntregados
    } else {
      console.log('Valor no valido');
      console.log('La cantidad a digitar debe ser multiplo de 10000');
    }
    function entregar() {
      if (iteracion == 5) {
        iteracion = 0;
      }
      if (total >= billetes[recorrido]) {
        entregado += billetes[recorrido];
        billetesEntregados[recorrido] += 1;
        total = total - billetes[recorrido];
        recorrido--;
      } else{
        if (recorrido == -1) {
          recorrido = tamano;
        }else
        recorrido--;
      }
      if (recorrido == -1) {
        iteracion++;
        if (iteracion != 5) {
          recorrido = tamano - iteracion;
        } else {
          recorrido = tamano;
        }
      }
    }
    
      
      if (recorrido == -1) {
        iteracion++;
        if (iteracion < 5) {
          recorrido = tamano - iteracion;
        } else {
        console.log("iteracion");
          recorrido = tamano;
        }
      }
    
    
  
  }
  return billetesEntregados
}  