import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = 'https://gorest.co.in/public/v2/users';
  token: string = '02e6033eb16339b13b9499a63a7938d5c02a934257c2b761d365850a3e36e778';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id + '?access-token=' + this.token);
  }
}
