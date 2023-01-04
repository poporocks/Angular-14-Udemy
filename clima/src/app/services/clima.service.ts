import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?appid=';
  key = '39af3b2e0b34f0995daa96054f2e70e2';

  constructor(private http: HttpClient) { 
    
  }

  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad + '&lang=es&units=metric';
    return this.http.get(URL);
  }
}
