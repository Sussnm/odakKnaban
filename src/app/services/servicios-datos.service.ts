import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosDatosService {
  url= 'http://localhost/odak_php/';

  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers. append('Accept', 'application/json');
    this.headers. append('Content-Type', 'application/json');
    this.headers. append('Access-Control-Allow-Origin', '*');
   // this.headers. append('Key', this.keyrest);


  }

  add(data: any): Observable<any>{
    console.log(data);
    const params = JSON.stringify(data);
    const  Headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.url}crearTareas.php `, params,{
     headers: Headers,

    });

   }


}
