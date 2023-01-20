import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent {
  @Input() user: any;
  imgUrl: string = 'https://picsum.photos/id/96/367/267'
  name: string = '';
  email: string = '';
  id: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.name = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }
}
