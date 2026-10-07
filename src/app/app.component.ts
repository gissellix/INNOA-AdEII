import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { FeriaProyectosComponent } from './components/feria-proyectos/feria-proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    CronogramaComponent,
    NovedadesComponent,
    FeriaProyectosComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'IINNOA 2026 - Facultad de Ingeniería UNJu';
}
