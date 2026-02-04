import type { BodyResponse } from '../types/bodyResponse.type';
import BaseRequestApi from './BaseRequest.api';
import { url_base } from '../config/url_base';

export class EstablecimientoApi extends BaseRequestApi {
  private base_url = `${url_base}/establecimientos`;
  
  public async get<T>(): Promise<BodyResponse<T>> {
    return this.request<T>(`${this.base_url}`, {
      method: 'GET',
      headers: {
        'x-mock-response-name': 'ok - listar establecimientos'
      }
    });
  }
}