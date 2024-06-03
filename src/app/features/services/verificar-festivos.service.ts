import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class VerificarFestivosService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}validarfestivo`;
  }

  public verificar(fecha: Date){
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();

    let fechaApi = `${this.url}/${año}/${mes}/${dia}`;
    return this.http.get(fechaApi, { responseType: 'text' });
  }
}
