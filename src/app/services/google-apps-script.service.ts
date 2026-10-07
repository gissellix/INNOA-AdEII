import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
  // Reemplazar con la URL generada al publicar la Web App en Google Apps Script
  private webAppUrl = 'https://script.google.com/macros/s/AKfycbxYOUR_GOOGLE_APPS_SCRIPT_ID_HERE/exec';

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
    // Si la URL sigue siendo la de ejemplo o vacía, simulamos envío exitoso para demostración fluida
    if (this.webAppUrl.includes('YOUR_GOOGLE_APPS_SCRIPT_ID_HERE')) {
      console.warn('GoogleAppsScriptService: Usando modo de simulación. Por favor configura tu URL de Web App.');
      
      return new Observable<ResponseInscripcion>(subscriber => {
        setTimeout(() => {
          subscriber.next({
            success: true,
            message: 'Inscripción registrada exitosamente en modo simulación.',
            idInscripcion: 'INNOA-' + Math.floor(100000 + Math.random() * 900000)
          });
          subscriber.complete();
        }, 1200);
      });
    }

    // Google Apps Script redirige respuestas con HTTP 302, usamos fetch text/json payload
    return from(
      fetch(this.webAppUrl, {
        method: 'POST',
        mode: 'no-cors', // Permite enviar sin bloqueos CORS desde GitHub Pages
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      })
    ).pipe(
      map(() => ({
        success: true,
        message: 'Inscripción enviada correctamente a Google Sheets y Drive.',
        idInscripcion: 'INNOA-' + Math.floor(100000 + Math.random() * 900000)
      })),
      catchError(error => {
        console.error('Error enviando inscripción:', error);
        return of({
          success: false,
          message: 'Ocurrió un error al enviar el formulario. Verifica tu conexión e inténtalo nuevamente.'
        });
      })
    );
  }
}
