import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  urlImagen= 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad: string;
  temperatura: number;
  humedad: number;
  clima: string;
  bProcesado: boolean;
  bLoading: boolean;
  bError: boolean;

  constructor(private _climaService: ClimaService) {
    this.ciudad = '';
    this.temperatura = 0;
    this.humedad = 0;
    this.clima = '';
    this.bProcesado = false;
    this.bLoading = false;
    this.bError = false;
  }

  obtenerClima() {
    this.bProcesado = false;
    this.bLoading = true;
    this.bError = false;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data);

      this.bProcesado = true;
      this.bLoading = false;

      this.temperatura = data.main.temp;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].description;
    }, error => {
      console.log(error);
      this.bLoading = false;
      this.fError();
    });
  }

  fError() {
    this.bError = true;
      setTimeout(() => {
        this.bError = false
        this.ciudad = ''
      }, 3000);
  }
}
