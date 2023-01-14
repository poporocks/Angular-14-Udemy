import { Component } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent {
  nombreImagen: string;

  constructor(private _imagenService: ImagenService) {
    this.nombreImagen = '';
  }

  buscarImagen() {
    if(this.nombreImagen === '') {
      this._imagenService.setError('Agrega un texto de búsqueda');
      return;
    }

    this._imagenService.enviarTerminoBusqueda(this.nombreImagen);
  }
}
