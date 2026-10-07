import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleAppsScriptService, ResponseInscripcion } from '../../services/google-apps-script.service';
import { ProyectoInscripcion } from '../../models/innoa.models';

@Component({
  selector: 'app-feria-proyectos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="feria" class="py-20 bg-[#0d1322] border-t border-[#2a3654] relative overflow-hidden">
      <!-- Ambient Lights -->
      <div class="absolute top-10 left-10 w-96 h-96 bg-[#b5f542]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#7c3aed]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header -->
        <div class="text-center space-y-4 mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#b5f542]/20 text-[#b5f542] border border-[#b5f542]/40 font-bold uppercase">
            🚀 DÍA 3 • 23 DE OCTUBRE DE 2026 • EXPO IINNOA
          </div>
          <h2 class="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Feria de <span class="text-[#b5f542]">Proyectos</span>
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Anota tu proyecto de Software, Inteligencia Artificial, IoT o Tesis. Adjunta la carpeta de 
            <strong class="text-white">Google Drive</strong> con tu documentación o video demo.
          </p>
        </div>

        <!-- Form Tech Window Container -->
        <div class="tech-window shadow-2xl border-2 border-[#2a3654]">
          
          <!-- Window Header Controls -->
          <div class="tech-window-header bg-[#1e293b]">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full dot-yellow inline-block"></span>
              <span class="w-3 h-3 rounded-full dot-pink inline-block"></span>
              <span class="w-3 h-3 rounded-full dot-cyan inline-block"></span>
              <span class="text-xs font-mono text-gray-300 ml-2 font-bold">formulario_inscripcion_expo_iinnoa.v3</span>
            </div>
            <div class="text-xs font-mono text-[#b5f542]">
              <i class="fa-solid fa-cloud-arrow-up mr-1"></i> Backend: Google Apps Script Web App
            </div>
          </div>

          <!-- Web App Config Bar (Optional toggle to set URL) -->
          <div class="bg-[#151c2e] px-6 py-3 border-b border-[#2a3654] flex flex-wrap items-center justify-between text-xs font-mono gap-3">
            <div class="flex items-center gap-2 text-gray-300">
              <span class="text-gray-400">Endpoint Web App URL:</span>
              <span class="text-[#a855f7] truncate max-w-xs sm:max-w-md">{{ scriptService.getCustomUrl() }}</span>
            </div>
            <button (click)="toggleConfigModal()" class="text-xs text-[#b5f542] hover:underline flex items-center gap-1 font-bold">
              <i class="fa-solid fa-gear"></i> Configurar URL Google Apps Script
            </button>
          </div>

          <!-- Form Body -->
          <form (ngSubmit)="onSubmit()" #proyectoForm="ngForm" class="p-6 sm:p-10 space-y-8 bg-[#0b0f19]">
            
            <!-- Grid 1: Basic Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Título del Proyecto -->
              <div class="space-y-2">
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                  Título del Proyecto <span class="text-[#b5f542]">*</span>
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <i class="fa-solid fa-folder-open text-[#b5f542]"></i>
                  </div>
                  <input type="text" [(ngModel)]="proyecto.titulo" name="titulo" required
                    placeholder="Ej: Sistema IA para Monitoreo Agrícola en el NOA"
                    class="w-full pl-10 pr-4 py-3 bg-[#151c2e] border border-[#2a3654] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b5f542] focus:ring-1 focus:ring-[#b5f542] transition-colors text-sm font-medium">
                </div>
              </div>

              <!-- Categoría -->
              <div class="space-y-2">
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                  Categoría <span class="text-[#b5f542]">*</span>
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <i class="fa-solid fa-layer-group text-[#a855f7]"></i>
                  </div>
                  <select [(ngModel)]="proyecto.categoria" name="categoria" required
                    class="w-full pl-10 pr-4 py-3 bg-[#151c2e] border border-[#2a3654] rounded-xl text-white focus:outline-none focus:border-[#b5f542] focus:ring-1 focus:ring-[#b5f542] transition-colors text-sm font-medium appearance-none">
                    <option value="" disabled selected>Selecciona una categoría</option>
                    <option value="Software & Web Apps">Software & Desarrollo Web / Móvil</option>
                    <option value="Inteligencia Artificial & Ciencia de Datos">Inteligencia Artificial & Ciencia de Datos</option>
                    <option value="IoT & Hardware Embedded">IoT, Robótica & Hardware</option>
                    <option value="Tesis & Investigación Académica">Tesis & Proyecto de Grado</option>
                    <option value="Ciberseguridad & Redes">Ciberseguridad & Infraestructura</option>
                  </select>
                </div>
              </div>

            </div>

            <!-- Grid 2: Integrantes & Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Nombres de Integrantes -->
              <div class="space-y-2">
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                  Integrantes del Equipo <span class="text-[#b5f542]">*</span>
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <i class="fa-solid fa-users text-[#b5f542]"></i>
                  </div>
                  <input type="text" [(ngModel)]="proyecto.integrantes" name="integrantes" required
                    placeholder="Ej: Sofía Pérez, Lucas Gómez, Carlos Mamani"
                    class="w-full pl-10 pr-4 py-3 bg-[#151c2e] border border-[#2a3654] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b5f542] focus:ring-1 focus:ring-[#b5f542] transition-colors text-sm font-medium">
                </div>
              </div>

              <!-- Email de Contacto -->
              <div class="space-y-2">
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                  Email de Contacto <span class="text-[#b5f542]">*</span>
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <i class="fa-solid fa-envelope text-[#a855f7]"></i>
                  </div>
                  <input type="email" [(ngModel)]="proyecto.email" name="email" required email
                    placeholder="equipo@ejemplo.com"
                    class="w-full pl-10 pr-4 py-3 bg-[#151c2e] border border-[#2a3654] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b5f542] focus:ring-1 focus:ring-[#b5f542] transition-colors text-sm font-medium">
                </div>
              </div>

            </div>

            <!-- Grid 3: Institución & Carrera -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <!-- Institución -->
              <div class="space-y-2">
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                  Institución / Universidad <span class="text-[#b5f542]">*</span>
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <i class="fa-solid fa-building-columns text-[#b5f542]"></i>
                  </div>
                  <input type="text" [(ngModel)]="proyecto.institucion" name="institucion" required
                    placeholder="Ej: Facultad de Ingeniería - UNJu"
                    class="w-full pl-10 pr-4 py-3 bg-[#151c2e] border border-[#2a3654] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b5f542] focus:ring-1 focus:ring-[#b5f542] transition-colors text-sm font-medium">
                </div>
              </div>

              <!-- Carrera -->
              <div class="space-y-2">
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                  Carrera <span class="text-[#b5f542]">*</span>
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <i class="fa-solid fa-graduation-cap text-[#a855f7]"></i>
                  </div>
                  <input type="text" [(ngModel)]="proyecto.carrera" name="carrera" required
                    placeholder="Ej: Ingeniería Informática / Lic. en Sistemas"
                    class="w-full pl-10 pr-4 py-3 bg-[#151c2e] border border-[#2a3654] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b5f542] focus:ring-1 focus:ring-[#b5f542] transition-colors text-sm font-medium">
                </div>
              </div>

            </div>

            <!-- Enlace a Google Drive / Almacenamiento -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label class="block text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                  Enlace a Carpeta de Google Drive / Documentación <span class="text-[#b5f542]">*</span>
                </label>
                <span class="text-[11px] font-mono text-[#b5f542]">Link público de Google Drive</span>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <i class="fa-brands fa-google-drive text-[#b5f542] text-lg"></i>
                </div>
                <input type="url" [(ngModel)]="proyecto.linkDrive" name="linkDrive" required
                  placeholder="https://drive.google.com/drive/folders/xxxxxx..."
                  class="w-full pl-10 pr-4 py-3.5 bg-[#151c2e] border border-[#2a3654] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b5f542] focus:ring-1 focus:ring-[#b5f542] transition-colors text-sm font-mono">
              </div>
              <p class="text-xs text-gray-400 font-mono">
                💡 Incluye aquí tu documento explicativo, PDF de diapositivas, capturas de pantalla o enlace a video demo de YouTube/Drive.
              </p>
            </div>

            <!-- Descripción del Proyecto -->
            <div class="space-y-2">
              <label class="block text-xs font-mono font-bold uppercase tracking-wider text-gray-200">
                Descripción / Resumen del Proyecto <span class="text-[#b5f542]">*</span>
              </label>
              <textarea [(ngModel)]="proyecto.descripcion" name="descripcion" required rows="4"
                placeholder="Describe brevemente el problema que resuelve tu proyecto, la tecnología utilizada y las funcionalidades principales..."
                class="w-full p-4 bg-[#151c2e] border border-[#2a3654] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b5f542] focus:ring-1 focus:ring-[#b5f542] transition-colors text-sm font-medium resize-none"></textarea>
            </div>

            <!-- Submit Button & Messages -->
            <div class="pt-4 border-t border-[#2a3654] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div class="text-xs font-mono text-gray-400">
                <i class="fa-solid fa-shield-halved text-[#b5f542] mr-1"></i> Inscripción gratuita para estudiantes de la UNJu y región.
              </div>

              <button type="submit" [disabled]="!proyectoForm.form.valid || cargando"
                class="w-full sm:w-auto px-10 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider bg-[#b5f542] text-black hover:bg-[#a3e635] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(181,245,66,0.4)] flex items-center justify-center gap-3">
                <i *ngIf="cargando" class="fa-solid fa-spinner animate-spin text-lg"></i>
                <i *ngIf="!cargando" class="fa-solid fa-paper-plane text-lg"></i>
                <span>{{ cargando ? 'ENVIANDO A GOOGLE SHEETS...' : 'ENVIAR PROYECTO A EXPO IINNOA' }}</span>
              </button>

            </div>

          </form>

        </div>

      </div>

      <!-- Modal de Confirmación de Inscripción Ticket -->
      <div *ngIf="modalResultado" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
        <div class="tech-window max-w-lg w-full bg-[#151c2e] border-2 border-[#b5f542] shadow-[0_0_50px_rgba(181,245,66,0.3)]">
          
          <div class="tech-window-header bg-[#1e293b]">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full dot-yellow"></span>
              <span class="w-3 h-3 rounded-full dot-pink"></span>
              <span class="w-3 h-3 rounded-full dot-cyan"></span>
            </div>
            <span class="text-xs font-mono text-[#b5f542] font-bold">comprobante_inscripcion.pdf</span>
          </div>

          <div class="p-8 text-center space-y-6 bg-gradient-to-b from-[#151c2e] to-[#0b0f19]">
            
            <div class="w-20 h-20 mx-auto rounded-full bg-[#b5f542]/20 border-2 border-[#b5f542] flex items-center justify-center text-4xl text-[#b5f542]">
              <i class="fa-solid fa-circle-check"></i>
            </div>

            <div>
              <span class="px-3 py-1 rounded-full text-xs font-mono bg-[#b5f542] text-black font-extrabold uppercase">
                INSCRIPCIÓN REGISTRADA
              </span>
              <h3 class="text-2xl font-black text-white mt-3">¡Proyecto Postulado con Éxito!</h3>
              <p class="text-xs text-gray-300 mt-1 font-mono">Código de Ticket: <strong class="text-[#b5f542]">{{ modalResultado.idInscripcion }}</strong></p>
            </div>

            <div class="bg-[#0b0f19] p-4 rounded-xl border border-[#2a3654] text-left text-xs font-mono space-y-2 text-gray-300">
              <div><strong class="text-gray-400">Proyecto:</strong> {{ proyecto.titulo }}</div>
              <div><strong class="text-gray-400">Categoría:</strong> {{ proyecto.categoria }}</div>
              <div><strong class="text-gray-400">Integrantes:</strong> {{ proyecto.integrantes }}</div>
              <div><strong class="text-gray-400">Email:</strong> {{ proyecto.email }}</div>
              <div><strong class="text-gray-400">Enlace Drive:</strong> <a [href]="proyecto.linkDrive" target="_blank" class="text-[#b5f542] underline truncate block">{{ proyecto.linkDrive }}</a></div>
            </div>

            <p class="text-xs text-gray-400">
              El equipo organizador de ADEII - FI UNJu se comunicará por correo para coordinar la asignación del stand en el Patio Central el día 23 de Octubre.
            </p>

            <button (click)="cerrarModal()" class="w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-[#b5f542] text-black hover:bg-[#a3e635] transition-all">
              Aceptar y Cerrar Comprobante
            </button>

          </div>
        </div>
      </div>

      <!-- Config Modal URL Google Apps Script -->
      <div *ngIf="showConfigModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div class="tech-window max-w-md w-full bg-[#151c2e] border border-[#a855f7]">
          <div class="tech-window-header bg-[#1e293b]">
            <span class="text-xs font-mono text-[#a855f7] font-bold">configurar_backend.env</span>
            <button (click)="toggleConfigModal()" class="text-gray-400 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="p-6 space-y-4">
            <h4 class="text-lg font-bold text-white">URL de Google Apps Script (Web App)</h4>
            <p class="text-xs text-gray-300">
              Pega aquí la URL desplegada como Web App desde tu editor de Google Apps Script.
            </p>
            <input type="url" [(ngModel)]="tempUrl" placeholder="https://script.google.com/macros/s/.../exec"
              class="w-full p-3 bg-[#0b0f19] border border-[#2a3654] rounded-xl text-xs font-mono text-white focus:outline-none focus:border-[#a855f7]">
            <div class="flex items-center justify-end gap-2 pt-2">
              <button (click)="toggleConfigModal()" class="px-4 py-2 rounded-lg text-xs font-mono text-gray-400 hover:text-white">Cancelar</button>
              <button (click)="guardarConfigUrl()" class="px-5 py-2 rounded-lg text-xs font-mono font-bold bg-[#7c3aed] text-white hover:bg-[#6d28d9]">Guardar Endpoint</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  `
})
export class FeriaProyectosComponent {
  proyecto: ProyectoInscripcion = {
    titulo: '',
    categoria: '',
    integrantes: '',
    email: '',
    institucion: 'Facultad de Ingeniería - UNJu',
    carrera: '',
    descripcion: '',
    linkDrive: ''
  };

  cargando = false;
  modalResultado: ResponseInscripcion | null = null;
  showConfigModal = false;
  tempUrl = '';

  constructor(public scriptService: GoogleAppsScriptService) {}

  onSubmit(): void {
    if (!this.proyecto.titulo || !this.proyecto.linkDrive) {
      return;
    }

    this.cargando = true;

    this.scriptService.enviarInscripcion(this.proyecto).subscribe({
      next: (res) => {
        this.cargando = false;
        this.modalResultado = res;
      },
      error: (err) => {
        this.cargando = false;
        console.error(err);
        alert('Ocurrió un error al procesar el formulario.');
      }
    });
  }

  cerrarModal(): void {
    this.modalResultado = null;
    this.proyecto = {
      titulo: '',
      categoria: '',
      integrantes: '',
      email: '',
      institucion: 'Facultad de Ingeniería - UNJu',
      carrera: '',
      descripcion: '',
      linkDrive: ''
    };
  }

  toggleConfigModal(): void {
    this.tempUrl = this.scriptService.getCustomUrl();
    this.showConfigModal = !this.showConfigModal;
  }

  guardarConfigUrl(): void {
    if (this.tempUrl) {
      this.scriptService.setCustomUrl(this.tempUrl);
    }
    this.showConfigModal = false;
  }
}
