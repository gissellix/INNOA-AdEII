import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaItem } from '../../models/innoa.models';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="novedades" class="py-20 bg-[#0b0f19] border-t border-[#2a3654]/50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div class="space-y-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#7c3aed]/20 text-[#a855f7] border border-[#7c3aed]/30">
              <i class="fa-solid fa-bullhorn"></i> ANUNCIOS & COMUNICADOS
            </div>
            <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Novedades del <span class="text-[#b5f542]">Evento</span>
            </h2>
            <p class="text-gray-300 text-base max-w-xl">
              Mantente al tanto de las conferencias confirmadas, aperturas de acreditación e inscripciones.
            </p>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-xs font-mono text-gray-400">Síguenos en Instagram:</span>
            <a href="https://instagram.com/adeii.oficial" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl text-xs font-bold font-mono bg-[#151c2e] hover:bg-[#1e293b] text-[#b5f542] border border-[#2a3654] flex items-center gap-2 transition-all">
              <i class="fa-brands fa-instagram text-base text-[#a855f7]"></i>
              <span>&#64;adeii.oficial</span>
            </a>
          </div>
        </div>

        <!-- News Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let noticia of noticias" class="tech-window flex flex-col justify-between group hover:border-[#7c3aed] transition-all duration-300">
            
            <div class="space-y-4 p-6">
              <div class="flex items-center justify-between text-xs font-mono">
                <span class="px-2.5 py-1 rounded bg-[#7c3aed]/20 text-[#a855f7] border border-[#7c3aed]/40 font-bold uppercase">
                  {{ noticia.categoria }}
                </span>
                <span class="text-gray-400"><i class="fa-regular fa-clock mr-1"></i>{{ noticia.fecha }}</span>
              </div>

              <h3 class="text-xl font-bold text-white group-hover:text-[#b5f542] transition-colors leading-snug">
                {{ noticia.titulo }}
              </h3>

              <p class="text-sm text-gray-300 leading-relaxed">
                {{ noticia.resumen }}
              </p>
            </div>

            <div class="p-6 bg-[#0d1322] border-t border-[#2a3654] flex items-center justify-between text-xs font-mono">
              <span class="text-gray-400 font-semibold">Organiza: ADEII Jujuy</span>
              <a href="#feria" class="text-[#b5f542] hover:underline flex items-center gap-1 font-bold">
                Más Info <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class NovedadesComponent {
  noticias: NoticiaItem[] = [
    {
      id: '1',
      fecha: '05 OCT 2026',
      categoria: 'CONVOCATORIA',
      titulo: 'Abierta la inscripción a la Feria de Proyectos del Día 3 (EXPO IINNOA)',
      resumen: 'Estudiantes de ingeniería y carreras afines ya pueden anotar sus proyectos de software, IA, IoT o tesis. Adjunta tu carpeta de Google Drive y asegura tu lugar.',
      imagen: ''
    },
    {
      id: '2',
      fecha: '02 OCT 2026',
      categoria: 'HACKATÓN',
      titulo: 'Prepara tu equipo para el Hackatón IINNOA del 22 de Octubre',
      resumen: 'Equipos de 3 a 5 integrantes competirán durante 12 horas continuas con mentoría de docentes y profesionales. Consigna sorpresa el mismo día.',
      imagen: ''
    },
    {
      id: '3',
      fecha: '28 SEP 2026',
      categoria: 'DISERTANTES',
      titulo: 'Confirmada la grilla de referentes en IA & Ciberseguridad',
      resumen: 'Contaremos con especialistas internacionales que abordarán las tendencias en grandes modelos de lenguaje, seguridad en la nube y neurotecnologías.',
      imagen: ''
    }
  ];
}
