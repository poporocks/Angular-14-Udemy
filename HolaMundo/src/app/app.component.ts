import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrar = true;
  listEstudiantes: any[] = [
    {nombre: 'Edgar', estado: 'Promocionado'},
    {nombre: 'Angeles', estado: 'Regular'},
    {nombre: 'Lilith', estado: 'Regular'},
    {nombre: 'Elliot', estado: 'Regular'},
    {nombre: 'Chow', estado: 'Gata'},
    {nombre: 'Ruth', estado: 'Gata'}
  ];

  toogle(): void {
    this.mostrar = !this.mostrar;
  }
}
