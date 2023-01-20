import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  id: number;
  imgUrl: string = 'https://picsum.photos/id/96/367/267'
  name: string;
  email: string;
  gender: string;
  status: string;
  bLoading: boolean;

  constructor(private aRoute: ActivatedRoute, private _usuarioService: UsuarioService) { 
    this.bLoading = true;
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
    this.name = '';
    this.email = '';
    this.gender = '';
    this.status = '';
  }

  ngOnInit(): void {
    console.log(this.id);
    this.getUsuario(this.id);
  }

  getUsuario(id: number) {
    this._usuarioService.getUsuario(id).subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.email = data.email;
      this.gender = data.gender;
      this.status = data.status;
      this.bLoading = false;
    }, error => {
      console.log(error);
    })
  }
}
