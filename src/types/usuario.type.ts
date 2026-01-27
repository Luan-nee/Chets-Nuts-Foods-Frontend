export type UserRole = 'administrador' | 'chofer' | 'trabajador';

export type Credenciales = {
  usuario: string;
  contrasenia: string;
}

export type ResponseSesion = {
  access_token: string;
  time_expired: string;
}

export type User = {
  nombres: string;
  apellidos: string;
  rol: UserRole;
}