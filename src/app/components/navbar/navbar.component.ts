import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-[#2a3654]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Logo & Brand Header -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-11 h-11 bg-gradient-to-br from-[#7c3aed] to-[#b5f542] p-0.5 rounded-xl transition-transform group-hover:scale-105">
            <div class="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
              <i class="fa-solid fa-microchip text-[#b5f542] text-xl"></i>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-2xl tracking-tighter text-white">IINNOA</span>
              <span class="bg-[#b5f542] text-black text-[10px] font-black px-1.5 py-0.5 rounded uppercase">2026</span>
            </div>
            <p class="text-[11px] text-gray-400 uppercase tracking-widest font-mono">INGENIERÍA INTELIGENTE NOA</p>
          </div>
        </a>

        <!-- Desktop Nav Links -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm font-medium text-gray-300 hover:text-[#b5f542] transition-colors">¿De qué trata?</a>
          <a href="#cronograma" class="text-sm font-medium text-gray-300 hover:text-[#b5f542] transition-colors">Cronograma</a>
          <a href="#novedades" class="text-sm font-medium text-gray-300 hover:text-[#b5f542] transition-colors">Novedades</a>
          <a href="#feria" class="text-sm font-medium text-gray-300 hover:text-[#b5f542] transition-colors">Feria de Proyectos</a>
        </nav>

        <!-- Right Side CTA & Insignias -->
        <div class="hidden lg:flex items-center gap-4">
          <div class="flex items-center gap-2 text-xs font-mono text-gray-400 border-r border-[#2a3654] pr-4">
            <i class="fa-solid fa-building-columns text-[#7c3aed]"></i>
            <span>FI-UNJu</span>
          </div>
          <a href="#feria" class="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#b5f542] text-black hover:bg-[#a3e635] transition-all hover:shadow-[0_0_15px_rgba(181,245,66,0.5)] flex items-center gap-2">
            <i class="fa-solid fa-[#000] fa-rocket"></i>
            <span>Anotar Mi Proyecto</span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button (click)="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-300 hover:text-white p-2" aria-label="Abrir Menú">
          <i class="fa-solid text-xl" [ngClass]="isMenuOpen ? 'fa-xmark' : 'fa-bars'"></i>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div *ngIf="isMenuOpen" class="md:hidden bg-[#151c2e] border-b border-[#2a3654] px-4 pt-4 pb-6 space-y-3">
        <a (click)="isMenuOpen = false" href="#about" class="block py-2 text-base font-medium text-gray-200 hover:text-[#b5f542]">¿De qué trata?</a>
        <a (click)="isMenuOpen = false" href="#cronograma" class="block py-2 text-base font-medium text-gray-200 hover:text-[#b5f542]">Cronograma</a>
        <a (click)="isMenuOpen = false" href="#novedades" class="block py-2 text-base font-medium text-gray-200 hover:text-[#b5f542]">Novedades</a>
        <a (click)="isMenuOpen = false" href="#feria" class="block py-2 text-base font-medium text-gray-200 hover:text-[#b5f542]">Feria de Proyectos</a>
        <div class="pt-3 border-t border-[#2a3654]">
          <a (click)="isMenuOpen = false" href="#feria" class="w-full py-3 rounded-xl font-bold text-center text-sm uppercase bg-[#b5f542] text-black block">
            Anotar Mi Proyecto Día 3
          </a>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  isMenuOpen = false;
}
