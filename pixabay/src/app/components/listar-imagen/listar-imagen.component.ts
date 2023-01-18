import { Component } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent {
  termino: string;
  suscripcion: Subscription;
  listImagenes: any[];
  bLoading: boolean;
  imagenesPagina: number;
  pagina: number;
  totalPaginas: number;

  constructor(private _imagenService: ImagenService) { 
    this.termino = '';
    this.imagenesPagina = 30;
    this.pagina = 1;
    this.totalPaginas = 0;
    this.listImagenes = [];
    this.bLoading = false


    this.suscripcion = this._imagenService.getTerminoBusqueda().subscribe(data => {
      console.log(data);
      this.termino = data;
      this.bLoading = true;
      this.pagina = 1;
      this.obtenerImagenes();
    });
  }

  obtenerImagenes() {
    this._imagenService.getImagenes(this.termino, this.imagenesPagina, this.pagina).subscribe(data => {
      console.log(DataTransfer);
      this.bLoading = false;

      if(data.totalHits === 0) {
        this._imagenService.setError('No encontramos ningún resultado.');
        return;
      }
      
      this.totalPaginas = Math.ceil(data.totalHits / this.imagenesPagina);
      this.listImagenes = data.hits
    }, error => {
      this.bLoading = false;
      this._imagenService.setError('Ocurrió un inconveniente al realizar la búsqueda.');
        return;
    });
  }

  pagAnterior() {
    this.pagina--;
    this.bLoading=true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }

  pagPosterior() {
    this.pagina++;
    this.bLoading=true;
    this.listImagenes = [];
    this.obtenerImagenes();
  }
}
