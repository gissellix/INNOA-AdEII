import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#111726] to-[#0b0f19]">
      <!-- Background Cyber Grid & Glow Orbs -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-[#b5f542]/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Header Badges -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-6">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#7c3aed]/20 text-[#a855f7] border border-[#7c3aed]/40">
            <i class="fa-solid fa-users"></i> ADEII - ASOCIACIÓN DE ESTUDIANTES DE INGENIERÍA INFORMÁTICA
          </span>
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#1e293b] text-gray-300 border border-[#2a3654]">
            <i class="fa-solid fa-graduation-cap text-[#b5f542]"></i> FACULTAD DE INGENIERÍA - UNJU
          </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Text Column -->
          <div class="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div class="inline-block px-4 py-1.5 rounded-lg bg-[#b5f542]/10 border border-[#b5f542]/30 text-[#b5f542] text-xs font-mono font-bold tracking-widest uppercase">
              📍 JUJUY | ARGENTINA • FACULTAD DE INGENIERÍA UNJU
            </div>

            <h1 class="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-white">
              <span class="block text-[#b5f542] glow-text-lime uppercase">IINNOA</span>
              <span class="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-100 mt-2">
                INGENIERÍA INTELIGENTE <span class="text-[#a855f7]">NOA 2026</span>
              </span>
            </h1>

            <p class="text-lg sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              El evento de ingeniería y tecnología más grande de la región. 4 días intensivos de 
              <span class="text-white font-semibold underline decoration-[#b5f542] decoration-2">Charlas</span>, 
              <span class="text-white font-semibold underline decoration-[#7c3aed] decoration-2">Hackatón</span>, 
              <span class="text-white font-semibold underline decoration-[#b5f542] decoration-2">Feria de Proyectos</span> e 
              <span class="text-white font-semibold underline decoration-[#7c3aed] decoration-2">IINNOA Camp</span>.
            </p>

            <!-- Countdown Timer Window -->
            <div class="tech-window max-w-md mx-auto lg:mx-0 p-4 border-l-4 border-l-[#b5f542]">
              <div class="flex items-center justify-between mb-3 text-xs font-mono text-gray-400">
                <span class="flex items-center gap-2"><i class="fa-solid fa-clock text-[#b5f542]"></i> TIEMPO RESTANTE PARA EL EVENTO</span>
                <span class="text-[#b5f542]">21 OCT 2026</span>
              </div>
              <div class="grid grid-cols-4 gap-2 text-center">
                <div class="bg-[#0b0f19] p-2.5 rounded-lg border border-[#2a3654]">
                  <span class="block text-2xl font-extrabold font-mono text-white">{{ days }}</span>
                  <span class="text-[10px] text-gray-400 uppercase">Días</span>
                </div>
                <div class="bg-[#0b0f19] p-2.5 rounded-lg border border-[#2a3654]">
                  <span class="block text-2xl font-extrabold font-mono text-white">{{ hours }}</span>
                  <span class="text-[10px] text-gray-400 uppercase">Horas</span>
                </div>
                <div class="bg-[#0b0f19] p-2.5 rounded-lg border border-[#2a3654]">
                  <span class="block text-2xl font-extrabold font-mono text-white">{{ minutes }}</span>
                  <span class="text-[10px] text-gray-400 uppercase">Min</span>
                </div>
                <div class="bg-[#0b0f19] p-2.5 rounded-lg border border-[#2a3654]">
                  <span class="block text-2xl font-extrabold font-mono text-[#b5f542]">{{ seconds }}</span>
                  <span class="text-[10px] text-gray-400 uppercase">Seg</span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#feria" class="px-8 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider bg-[#b5f542] text-black hover:bg-[#a3e635] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(181,245,66,0.4)] flex items-center gap-3">
                <i class="fa-solid fa-paper-plane text-lg"></i>
                <span>Anotar Mi Proyecto (Día 3)</span>
              </a>
              <a href="#cronograma" class="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-[#1e293b] text-white hover:bg-[#2a3654] border border-[#2a3654] transition-all flex items-center gap-3">
                <i class="fa-solid fa-calendar-days text-[#a855f7]"></i>
                <span>Ver Cronograma</span>
              </a>
            </div>
          </div>

          <!-- Mascot Card Column (Neo-brutalist tech window) -->
          <div class="lg:col-span-5">
            <div class="tech-window shadow-2xl relative group">
              <!-- Window Header -->
              <div class="tech-window-header">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full dot-yellow inline-block"></span>
                  <span class="w-3 h-3 rounded-full dot-pink inline-block"></span>
                  <span class="w-3 h-3 rounded-full dot-cyan inline-block"></span>
                </div>
                <span class="text-xs font-mono text-gray-400">mascota_iinnoa_2026.exe</span>
              </div>
              
              <!-- Mascot Content Area -->
              <div class="p-8 text-center bg-gradient-to-b from-[#151c2e] to-[#0d1322] relative overflow-hidden">
                <div class="w-64 h-64 mx-auto relative flex items-center justify-center">
                  <!-- Animated Pulse Halo -->
                  <div class="absolute inset-0 bg-[#b5f542]/10 rounded-full animate-ping pointer-events-none"></div>
                  
                  <!-- Styled Mascot Representation: Robot riding Llama 🤖🦙 -->
                  <div class="relative z-10 space-y-2">
                    <div class="text-8xl transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_25px_rgba(181,245,66,0.5)]">
                      🤖🦙
                    </div>
                    <div class="inline-block bg-[#7c3aed] text-white text-xs font-mono font-bold px-3 py-1 rounded-full shadow-lg">
                      BIENVENIDOS A JUJUY!
                    </div>
                  </div>
                </div>

                <div class="mt-6 pt-6 border-t border-[#2a3654] grid grid-cols-2 gap-4 text-left">
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase font-mono block">FECHAS OFICIALES</span>
                    <span class="text-sm font-bold text-[#b5f542]">21 - 24 OCTUBRE</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-gray-400 uppercase font-mono block">SEDE PRINCIPAL</span>
                    <span class="text-sm font-bold text-white">FI - UNJu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private intervalId: any;

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const targetDate = new Date('2026-10-21T09:00:00-03:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
}
