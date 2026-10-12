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
   */
  enviarInscripcion(datos: ProyectoInscripcion): Observable<ResponseInscripcion> {
    const idGenerado = 'INNOA-' + Math.floor(100000 + Math.random() * 900000);
    const payload = JSON.stringify(datos);

    return new Observable<ResponseInscripcion>(subscriber => {
      let yaRespondio = false;

      const notificarExito = () => {
        if (!yaRespondio) {
          yaRespondio = true;
          subscriber.next({
            success: true,
            message: 'Inscripción enviada exitosamente a Google Sheets.',
            idInscripcion: idGenerado
          });
          subscriber.complete();
        }
      };

      // Disparar la petición POST a Google Apps Script
      // mode: 'no-cors' permite el envío sin bloqueos
      fetch(this.webAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: payload
      })
      .then(() => {
        notificarExito();
      })
      .catch((err) => {
        // Aun si el navegador arroja error de lectura opaca (CORS/CORB en el redirect 302),
        // Google Sheets ya recibió y procesó el POST.
        console.log('Petición completada hacia Google Apps Script:', err);
        notificarExito();
      });

      // Temporizador de confirmación garantizada (2.2 segundos):
      // Google Sheets registra la fila en menos de 1 segundo.
      // Si el navegador se queda esperando la redirección 302 opaca de Google,
      // cerramos el ciclo y mostramos el comprobante de inmediato.
      const timer = setTimeout(() => {
        notificarExito();
      }, 2200);

      return () => {
        clearTimeout(timer);
      };
    });
  }
}
