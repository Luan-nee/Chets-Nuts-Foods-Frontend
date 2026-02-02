export type UserRole = 'administrador' | 'chofer' | 'trabajador';

export type Credenciales = {
  usuario: string;
  contrasenia: string;
}

export type ResponseSesion = {
  tokenZ: string;
  roles: string;
  nombreUser: string;
}

export type User = {
  tokenZ: string;
  nombreUser: string;
  role: UserRole;
}