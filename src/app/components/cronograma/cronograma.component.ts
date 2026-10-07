import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronogramaItem } from '../../models/innoa.models';

@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="cronograma" class="py-20 bg-[#0d1322] border-t border-[#2a3654]/50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#b5f542]/20 text-[#b5f542] border border-[#b5f542]/30">
            <i class="fa-solid fa-calendar-days"></i> AGENDA OFICIAL 2026
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Cronograma del <span class="text-[#a855f7]">Evento</span>
          </h2>
          <p class="text-gray-300 text-lg">
            Del 21 al 24 de Octubre de 2026 en el campus de la Facultad de Ingeniería - Universidad Nacional de Jujuy.
          </p>
        </div>

        <!-- Timeline Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let item of items" 
               class="tech-window flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
               [ngClass]="item.color === 'lime' ? 'border-t-4 border-t-[#b5f542]' : 'border-t-4 border-t-[#7c3aed]'">
            
            <!-- Day Pill Header -->
            <div class="p-6 bg-[#151c2e] space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-3xl font-black font-mono tracking-tight px-4 py-1.5 rounded-2xl"
                      [ngClass]="item.color === 'lime' ? 'bg-[#b5f542] text-black' : 'bg-[#7c3aed] text-white'">
                  {{ item.fecha }}
                </span>
                <span class="text-xs font-mono text-gray-400 uppercase">Día {{ item.diaNumero }}</span>
              </div>

              <div>
                <span class="text-[11px] font-mono text-[#a855f7] uppercase tracking-wider block font-bold">
                  {{ item.badge }}
                </span>
                <h3 class="text-xl font-extrabold text-white mt-1 leading-snug">
                  {{ item.titulo }}
                </h3>
              </div>

              <p class="text-xs text-gray-300 font-medium">
                {{ item.subtitulo }}
              </p>
            </div>

            <!-- Bullet Points & Details Window -->
            <div class="p-6 bg-[#0b0f19] border-t border-[#2a3654] flex-1 flex flex-col justify-between space-y-4">
              <ul class="space-y-2.5 text-xs text-gray-300">
                <li *ngFor="let punto of item.descripcionPuntos" class="flex items-start gap-2">
                  <i class="fa-solid fa-check text-xs mt-0.5" [ngClass]="item.color === 'lime' ? 'text-[#b5f542]' : 'text-[#a855f7]'"></i>
                  <span>{{ punto }}</span>
                </li>
              </ul>

              <div class="pt-4 border-t border-[#2a3654]/60 space-y-3">
                <div class="flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span><i class="fa-solid fa-location-dot text-[#b5f542] mr-1"></i> {{ item.lugar }}</span>
                  <span><i class="fa-solid fa-clock text-[#a855f7] mr-1"></i> {{ item.horario }}</span>
                </div>

                <!-- Day 3 Special CTA -->
                <div *ngIf="item.diaNumero === 3" class="pt-2">
                  <a href="#feria" class="w-full py-2.5 px-3 rounded-lg font-bold text-xs uppercase bg-[#b5f542] text-black hover:bg-[#a3e635] text-center flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(181,245,66,0.3)]">
                    <i class="fa-solid fa-paper-plane"></i>
                    <span>Anotar Mi Proyecto</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `
})
export class CronogramaComponent {
  items: CronogramaItem[] = [
    {
      diaNumero: 1,
      fecha: '21 OCT',
      titulo: 'Charlas y Mesa Panel con Profesionales',
      subtitulo: 'Disertaciones y debates en IA, Ciberseguridad y Neurociencia.',
      color: 'lime',
      horario: '09:00 - 18:00 HS',
      lugar: 'Anfiteatro FI-UNJu',
      badge: 'CONFERENCIAS & PANELES',
      descripcionPuntos: [
        'Apertura oficial del evento IINNOA 2026',
        'Disertaciones de expertos nacionales e internacionales',
        'Mesa panel interactiva con preguntas del público',
        'Networking con empresas patrocinadoras'
      ]
    },
    {
      diaNumero: 2,
      fecha: '22 OCT',
      titulo: 'Hackatón IINNOA: Desafío Regional',
      subtitulo: 'Desafío tecnológico regional con consigna sorpresa.',
      color: 'purple',
      horario: '08:00 - 20:00 HS',
      lugar: 'Laboratorios de Informática',
      badge: 'COMPETENCIA EN VIVO',
      descripcionPuntos: [
        'Consigna sorpresa revelada al inicio del día',
        'Trabajo en equipo y mentorías técnicas en vivo',
        'Desarrollo de prototipos funcionales de software',
        'Evaluación final y premiación ante jurado especial'
      ]
    },
    {
      diaNumero: 3,
      fecha: '23 OCT',
      titulo: 'EXPO IINNOA: Feria de Proyectos',
      subtitulo: 'Defensa de Proyectos y Feria de Empresas.',
      color: 'lime',
      horario: '10:00 - 19:00 HS',
      lugar: 'Patio Central FI-UNJu',
      badge: 'EXPOSICIÓN ABIERTA DE PROYECTOS',
      descripcionPuntos: [
        'Exposición de desarrollos de Software, IA, IoT y Tesis',
        'Evaluación por parte de docentes y referentes de la industria',
        'Stands institucionales y de empresas tecnológicas',
        'Postulación online previa para reserva de stand'
      ]
    },
    {
      diaNumero: 4,
      fecha: '24 OCT',
      titulo: 'IINNOA Camp & Cierre',
      subtitulo: 'Jornada recreativa, networking y entrega de certificados.',
      color: 'purple',
      horario: '11:00 - 17:00 HS',
      lugar: 'Predio Recreativo UNJu',
      badge: 'NETWORKING & COMUNIDAD',
      descripcionPuntos: [
        'Jornada de integración entre estudiantes e ingenieros',
        'Entrega de premios y reconocimientos',
        'Actividades al aire libre y espacio gastronómico',
        'Cierre oficial de IINNOA 2026'
      ]
    }
  ];
}
