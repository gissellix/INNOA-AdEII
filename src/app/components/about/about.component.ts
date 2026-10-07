import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjeTematico } from '../../models/innoa.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-[#0b0f19] border-t border-[#2a3654]/50 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Title Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#7c3aed]/20 text-[#a855f7] border border-[#7c3aed]/30">
            <i class="fa-solid fa-circle-info"></i> ACERCA DEL EVENTO
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">
            ¿De qué trata <span class="text-[#b5f542]">IINNOA 2026</span>?
          </h2>
          <p class="text-gray-300 text-lg">
            Organizado por la **Asociación de Estudiantes de Ingeniería Informática (ADEII)** en la **Facultad de Ingeniería (UNJu)**, IINNOA reúne a conferencistas nacionales e internacionales, estudiantes, referentes del sector tecnológico e investigadores del NOA.
          </p>
        </div>

        <!-- Ejes Temáticos Cards Grid (Styled like poster retro windows) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let eje of ejes" class="tech-window hover:border-[#b5f542]/60 transition-all duration-300 hover:-translate-y-1">
            <!-- Window Header with Dot Controls -->
            <div class="tech-window-header">
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                EJES TEMÁTICOS & PANELES
              </span>
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full dot-yellow"></span>
                <span class="w-2.5 h-2.5 rounded-full dot-pink"></span>
                <span class="w-2.5 h-2.5 rounded-full dot-cyan"></span>
              </div>
            </div>

            <!-- Card Content Body -->
            <div class="p-6 space-y-4">
              <div class="w-14 h-14 rounded-xl bg-[#7c3aed]/20 border border-[#7c3aed]/40 flex items-center justify-center text-2xl text-[#b5f542]">
                <i [class]="eje.icono"></i>
              </div>

              <h3 class="text-2xl font-bold text-white leading-snug">
                {{ eje.titulo }}
              </h3>

              <p class="text-sm text-gray-300 leading-relaxed">
                {{ eje.descripcion }}
              </p>

              <div class="pt-4 border-t border-[#2a3654]/60">
                <span class="text-[11px] font-mono text-[#b5f542] uppercase tracking-wider block mb-2 font-bold">
                  TÓPICOS CLAVE:
                </span>
                <ul class="space-y-1.5 text-xs text-gray-300 font-mono">
                  <li *ngFor="let tema of eje.temas" class="flex items-center gap-2">
                    <span class="text-[#7c3aed]">▸</span> {{ tema }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Special Banner for UNJu & Region -->
        <div class="mt-16 tech-window bg-gradient-to-r from-[#151c2e] via-[#1e1b4b] to-[#151c2e] p-8 border-l-4 border-l-[#7c3aed]">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-8 space-y-2">
              <span class="text-xs font-mono text-[#b5f542] uppercase font-bold">IMPULSANDO LA INGENIERÍA EN EL NOA</span>
              <h4 class="text-2xl font-extrabold text-white">Un espacio para aprender, desarrollar y conectar</h4>
              <p class="text-sm text-gray-300">
                Disertaciones y debates con profesionales referentes de la industria. Hackatón de desarrollo web regional con consignas en vivo y exposición abierta de proyectos universitarios ante jurados y empresas.
              </p>
            </div>
            <div class="lg:col-span-4 text-center lg:text-right">
              <a href="#cronograma" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-all">
                <i class="fa-solid fa-list-check"></i>
                <span>Explorar Cronograma</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  ejes: EjeTematico[] = [
    {
      titulo: 'Inteligencia Artificial & Ciencia de Datos',
      icono: 'fa-solid fa-brain',
      descripcion: 'Disertaciones y debate con profesionales sobre Machine Learning, LLMs, Analítica Avanzada y automatización inteligente aplicadas a la ingeniería.',
      temas: ['Modelos Generativos & LLMs', 'Computer Vision & Robótica', 'Big Data & Analítica Predictiva'],
      colorBorder: 'lime'
    },
    {
      titulo: 'Ciberseguridad & Infraestructura',
      icono: 'fa-solid fa-shield-halved',
      descripcion: 'Talleres y paneles sobre protección de datos, seguridad ofensiva/defensiva, cloud computing y resiliencia en arquitecturas críticas.',
      temas: ['Ethical Hacking & Pentesting', 'Zero Trust & Cloud Security', 'Criptografía & DevSecOps'],
      colorBorder: 'purple'
    },
    {
      titulo: 'Neurociencia & Nuevas Tecnologías',
      icono: 'fa-solid fa-microchip',
      descripcion: 'Investigaciones de vanguardia en interfaces cerebro-computadora (BCI), biotecnología, IoT industrial y tecnologías emergentes.',
      temas: ['Interfaces Cerebro-Computadora', 'Internet de las Cosas (IoT)', 'Computación Cuántica & Edge AI'],
      colorBorder: 'lime'
    }
  ];
}
