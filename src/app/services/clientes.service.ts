import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../domain/persona';
import { Libro } from '../domain/libro';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: any;

  constructor(private http: HttpClient) { }
  
  save(libro: Libro): Observable<any[]> {
    return this.http.post<any>("http://localhost:8080/prueba2023Buestan/rs/libro/crear", libro)
  }
 
  show(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/prueba2023Buestan/rs/libro/listar")
  }
  remove(cliente: Persona): Observable<any[]> {
    return this.http.post<any>("http://localhost:8080/demojpa/rs/cliente/borrar", cliente)
  }
  search(ce: string): Observable<any> {
      
    const url='http://localhost:8080/demojpa/rs/clientes/buscarxcedula';
    
    let queryParams= new HttpParams().append("cedula",ce);

    return this.http.get<any>(url,{params:queryParams});
  }
}
