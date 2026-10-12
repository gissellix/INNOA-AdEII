import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of, timeout, catchError, map } from 'rxjs';
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
   */
  enviarInscripcion(datos: ProyectoInscripcion): Observable<ResponseInscripcion> {
    // Si la URL sigue siendo la de ejemplo, simulamos para demostración fluida
    if (this.webAppUrl.includes('YOUR_GOOGLE_APPS_SCRIPT_ID_HERE')) {
      return new Observable<ResponseInscripcion>(subscriber => {
        setTimeout(() => {
          subscriber.next({
            success: true,
            message: 'Inscripción registrada exitosamente (Modo Simulación).',
            idInscripcion: 'INNOA-' + Math.floor(100000 + Math.random() * 900000)
          });
          subscriber.complete();
        }, 1200);
      });
    }

    const payload = JSON.stringify(datos);

    // Enviar a Google Apps Script con timeout de seguridad
    return from(
      fetch(this.webAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: payload
      })
    ).pipe(
      timeout(12000), // Si tarda más de 12 segundos, corta para evitar bloqueo
      map(() => ({
        success: true,
        message: 'Inscripción enviada exitosamente a Google Sheets.',
        idInscripcion: 'INNOA-' + Math.floor(100000 + Math.random() * 900000)
      })),
      catchError(error => {
        console.error('Error o Timeout enviando a Google Apps Script:', error);
        return of({
          success: false,
          message: 'No se pudo conectar con Google Apps Script. Por favor revisa los permisos de acceso del despliegue en Google Sheets.'
        });
      })
    );
  }
}
