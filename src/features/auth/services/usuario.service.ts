import Usuario from '../../../api/usuario.api';
import type { ResponseSesion, Credenciales } from '../../../types/usuario.type';

const usuarioApi = new Usuario();

export class UsuarioService {
  public async login(credenciales: Credenciales){
    return await usuarioApi.login<ResponseSesion>(credenciales);
  }
}