import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#070a12] border-t border-[#2a3654] text-gray-300 py-16 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Top Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- Brand Info -->
          <div class="md:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gradient-to-br from-[#7c3aed] to-[#b5f542] p-0.5 rounded-xl">
                <div class="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                  <i class="fa-solid fa-microchip text-[#b5f542]"></i>
                </div>
              </div>
              <div>
                <span class="font-extrabold text-2xl tracking-tighter text-white">IINNOA 2026</span>
                <p class="text-[10px] text-[#b5f542] uppercase tracking-widest font-mono font-bold">INGENIERÍA INTELIGENTE NOA</p>
              </div>
            </div>

            <p class="text-xs text-gray-400 max-w-md leading-relaxed">
              El evento referente del NOA en inteligencia artificial, ciberseguridad, neurociencia y desarrollo tecnológico. Organizado por estudiantes para estudiantes e ingenieros.
            </p>

            <div class="flex items-center gap-3 pt-2 text-sm font-mono text-gray-400">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151c2e] border border-[#2a3654]">
                <i class="fa-solid fa-building-columns text-[#7c3aed]"></i> FI-UNJu
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151c2e] border border-[#2a3654]">
                <i class="fa-solid fa-microchip text-[#b5f542]"></i> ADEII
              </span>
            </div>
          </div>

          <!-- Contacto Oficial -->
          <div class="space-y-3 font-mono text-xs">
            <h4 class="text-sm font-extrabold text-white uppercase tracking-wider">CONTACTO & OFICINA</h4>
            <ul class="space-y-2.5 text-gray-300">
              <li class="flex items-center gap-2">
                <i class="fa-solid fa-globe text-[#b5f542] w-4"></i>
                <a href="https://www.adeii.oficial" target="_blank" class="hover:text-[#b5f542] transition-colors">www.adeii.oficial</a>
              </li>
              <li class="flex items-center gap-2">
                <i class="fa-solid fa-envelope text-[#a855f7] w-4"></i>
                <a href="mailto:adeii@fi.unju.edu.ar" class="hover:text-[#a855f7] transition-colors">adeii&#64;fi.unju.edu.ar</a>
              </li>
              <li class="flex items-center gap-2">
                <i class="fa-brands fa-instagram text-[#b5f542] w-4"></i>
                <a href="https://instagram.com/adeii.oficial" target="_blank" class="hover:text-[#b5f542] transition-colors">&#64;adeii.oficial</a>
              </li>
            </ul>
          </div>

          <!-- Ubicación -->
          <div class="space-y-3 font-mono text-xs">
            <h4 class="text-sm font-extrabold text-white uppercase tracking-wider">SEDE DEL EVENTO</h4>
            <p class="text-gray-300 leading-relaxed">
              <strong>Facultad de Ingeniería</strong><br>
              Universidad Nacional de Jujuy<br>
              San Salvador de Jujuy, Argentina
            </p>
            <div class="pt-1">
              <span class="inline-block px-2.5 py-1 rounded bg-[#7c3aed]/20 text-[#a855f7] text-[10px] font-bold">
                📍 21 AL 24 DE OCTUBRE 2026
              </span>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright -->
        <div class="pt-8 border-t border-[#2a3654]/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4">
          <p>© 2026 ADEII • Asociación de Estudiantes de Ingeniería Informática - FI UNJu.</p>
          <p class="flex items-center gap-2 text-gray-400">
            <span>Diseñado para GitHub Pages</span>
            <span class="text-[#b5f542]">⚡ Angular + Serverless</span>
          </p>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}
