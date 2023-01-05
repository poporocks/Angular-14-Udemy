import { Component } from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  nombreUrl: string;
  urlShort: string;
  bProcesada: boolean;
  bLoading: boolean;
  bError: boolean;
  mensajeError: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.bProcesada = false;
    this.bLoading = false;
    this.bError = false;
    this.mensajeError = '';
  }

  procesarUrl() {
    console.log(this.nombreUrl)

    if(this.nombreUrl.length === 0) {
      this.fError('Por favor, ingrese una URL.');
      return;
    }

    this.bProcesada = false;
    this.bLoading = true;

    setTimeout(() => {
      this.obtenerUrlShort();
    }, 2000);
  }

  obtenerUrlShort() {
    this._shortUrlService.getUrlShort(this.nombreUrl).subscribe(data => {
      console.log(data);
      this.bProcesada=true;
      this.bLoading = false;
      this.urlShort = data.link;
    }, error => {
      console.log(error);
      this.bLoading = false;
      this.fError('Por favor, ingrese una URL válida.');
    })
  }

  fError(mensaje: string) {
    this.bError = true;
    this.mensajeError = mensaje;

    setTimeout(() => {
      this.bError = false;
      this.nombreUrl = '';
    }, 2000);
  }
}
