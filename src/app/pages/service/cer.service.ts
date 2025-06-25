// src/app/services/servidor.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servidor } from '../../models/servidor.model';

@Injectable({
  providedIn: 'root'
})
export class Cer {

  // ¡IMPORTANTE! Reemplaza esto con la URL de tu backend .NET
  private apiUrl = 'https://localhost:7013'; 

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de servidores de desarrollo desde el backend.
   */
  getServidoresDeCertificacion(): Observable<Servidor[]> {
    const url = `${this.apiUrl}/api/cer/certificacion`;
    return this.http.get<Servidor[]>(url);
  }
}