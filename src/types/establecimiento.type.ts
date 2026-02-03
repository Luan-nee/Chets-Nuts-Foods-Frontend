export type Establecimiento = {
  idEst: number;
  nombreEst: string;
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
}

export type EstablecimientoCreate = {
  idResponsable: number;
  nombreEst: string;
  direccion: string;
  descripcion: string;
  latitud: string;
  longitud: string;
  distrito: string;
  provincia: string;
  departamento: string;
  tipoEst: string;
  activo: boolean;
}