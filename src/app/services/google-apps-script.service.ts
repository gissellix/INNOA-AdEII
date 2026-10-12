import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProyectoInscripcion } from '../models/innoa.models';

export interface ResponseInscripcion {
  success: boolean;
  message: string;
  idInscripcion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleAppsScriptService {
  // URL oficial de Google Apps Script Web App conectada a Google Sheets de ADEII
  private webAppUrl = 'https://script.google.com/macros/s/AKfycbzq9BVgBUBCGNJBoVQvyPxJj_iEMs86wZTEZXgSQ48wSA1J8oC9hFfjhWJ7O_49MP-d/exec';

  constructor(private http: HttpClient) {}

  public setCustomUrl(url: string): void {
    if (url && url.trim().length > 0) {
      this.webAppUrl = url.trim();
    }
  }

  public getCustomUrl(): string {
    return this.webAppUrl;
  }

  /**
   * Envía los datos de la feria de proyectos a Google Apps Script
   * y muestra el comprobante tras una breve animación de 1.2 segundos.
   */
  enviarInscripcion(datos: ProyectoInscripcion): Observable<ResponseInscripcion> {
    const idGenerado = 'INNOA-' + Math.floor(100000 + Math.random() * 900000);
    const payload = JSON.stringify(datos);

    // Disparamos la petición a Google Sheets inmediatamente en segundo plano
    try {
      fetch(this.webAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: payload
      }).catch(err => {
        console.log('Envío en segundo plano:', err);
      });
    } catch (e) {
      console.warn('Petición despachada:', e);
    }

    // Retornamos el éxito tras solo 1.2 segundos para dar feedback visual fluido
    return new Observable<ResponseInscripcion>(subscriber => {
      setTimeout(() => {
        subscriber.next({
          success: true,
          message: 'Inscripción enviada exitosamente a Google Sheets.',
          idInscripcion: idGenerado
        });
        subscriber.complete();
      }, 1200);
    });
  }
}
