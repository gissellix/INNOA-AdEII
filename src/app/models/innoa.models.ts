export interface ProyectoInscripcion {
  titulo: string;
  categoria: string;
  integrantes: string;
  email: string;
  institucion: string;
  carrera: string;
  descripcion: string;
  linkDrive: string;
}

export interface CronogramaItem {
  diaNumero: number;
  fecha: string; // ej: "21 OCT"
  titulo: string;
  subtitulo: string;
  color: 'lime' | 'purple';
  horario: string;
  lugar: string;
  descripcionPuntos: string[];
  badge: string;
}

export interface NoticiaItem {
  id: string;
  fecha: string;
  categoria: string;
  titulo: string;
  resumen: string;
  imagen: string;
  destacado?: boolean;
}

export interface EjeTematico {
  titulo: string;
  icono: string;
  descripcion: string;
  temas: string[];
  colorBorder: string;
}
