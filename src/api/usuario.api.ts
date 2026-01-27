import { url_base } from '../config/roles';
// importación de clases
import BaseRequestApi from './BaseRequest.api';
// importación de tipos
import type { BodyResponse } from '../types/bodyResponse.type';
import type { Credenciales } from '../types/usuario.type';

export default class Usuario extends BaseRequestApi {
  private base_url = `${url_base}/sesion`;

  public async login<T>(credenciales: Credenciales): Promise<BodyResponse<T>> {
    return this.request<T>(`${this.base_url}`, {
      method: 'POST',
      headers: {
        'x-mock-response-name': 'ok - iniciar sesion'
      },
      body: JSON.stringify(credenciales)
    });
  }
}