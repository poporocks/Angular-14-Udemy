import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaNoticias: any[];
  bProcesando: boolean;

  constructor(private _noticiaService: NoticiaService) {
    this.listaNoticias = [];
    this.bProcesando = false;
  }

  buscarNoticias(parametros: any) {
    console.log(parametros);
    this.bProcesando = true;
    this.listaNoticias = [];

    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data => {
        console.log(data);
        this.bProcesando = false;
        this.listaNoticias = data.articles;
      }, error => {
        console.log(error);
        this.bProcesando = false;
      });
    }, 1000);
  }
}
