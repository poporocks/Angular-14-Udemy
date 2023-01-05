import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  url = 'https://api-ssl.bitly.com/v4/shorten';
  
  constructor(private hhtp: HttpClient) { }

  getUrlShort(nombreUrl: string): Observable<any> {
    // const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + this.token});

    const body = {
      long_url: nombreUrl
    }

    // return this.hhtp.post(this.url, body, {headers: tokenHeader});
    return this.hhtp.post(this.url, body);
  }
}
