// src/app/services/servidor.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servidor } from '../../models/servidor.model';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  // ¡IMPORTANTE! Reemplaza esto con la URL de tu backend .NET
  private apiUrl = 'https://localhost:7013'; 

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de servidores de desarrollo desde el backend.
   */
  getServidoresDeDesarrollo(): Observable<Servidor[]> {
    const url = `${this.apiUrl}/api/dev`;
    return this.http.get<Servidor[]>(url);
  }
  getServidoresDeCertificacion(): Observable<Servidor[]> {
    const url = `${this.apiUrl}/api/cer`;
    return this.http.get<Servidor[]>(url);
  }
  getServidoresDeProduccionBTB(): Observable<Servidor[]> {
    const url = `${this.apiUrl}/api/btb`;
    return this.http.get<Servidor[]>(url);
  }
  getServidoresDeProduccionDMZ(): Observable<Servidor[]> {
    const url = `${this.apiUrl}/api/dmz`;
    return this.http.get<Servidor[]>(url);
  }
  getServidoresDeProduccionBCR(): Observable<Servidor[]> {
    const url = `${this.apiUrl}/api/bcr`;
    return this.http.get<Servidor[]>(url);
  }
  getServidoresDeProduccionBHI(): Observable<Servidor[]> {
    const url = `${this.apiUrl}/api/bhi`;
    return this.http.get<Servidor[]>(url);
  }
}