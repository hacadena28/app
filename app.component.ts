import { Component } from '@angular/core';
import { ServiciosService } from './servicios.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CajeroAutomatico';
  constructor(private servicios: ServiciosService){

  }
}
