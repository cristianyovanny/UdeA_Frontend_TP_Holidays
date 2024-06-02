import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../env/enviroment';
import { Observable } from 'rxjs/internal/Observable';
import { Festivos } from '../../core/entidades/Festivos';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  
  public url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}obtenerfestivos`;
  }
  public listar():Observable<Festivos[]>{
    return this.http.get<Festivos[]>(`${this.url}/2024`);
  }

  public buscar(año: number):Observable<Festivos[]>{
    return this.http.get<Festivos[]>(`${this.url}/${año}`);
  }
}
