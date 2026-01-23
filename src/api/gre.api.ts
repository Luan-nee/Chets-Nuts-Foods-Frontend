import { url_base } from '../config/roles';
// importación de clases
import BaseRequestApi from './BaseRequest.api';
// importación de tipos
import type { BodyResponse } from '../types/bodyResponse.type';

export default class GreApi extends BaseRequestApi {
  private base_url = `${url_base}/guiasEmision`;

  public async get<T>(): Promise<BodyResponse<T>> {
    return this.request<T>(`${this.base_url}`, {
      method: 'GET',
      headers: {
        'x-mock-response-name': 'ok - guias de remision'
      }
    });
  }

  public async getByCodigoSeguimiento<T>(id: number): Promise<BodyResponse<T>> {
    return this.request<T>(`${this.base_url}/${id}`, {
      method: 'GET',
      headers: {
        'x-mock-response-name': 'not found - detalles de una guia de remision'
      }
    });
  }
}