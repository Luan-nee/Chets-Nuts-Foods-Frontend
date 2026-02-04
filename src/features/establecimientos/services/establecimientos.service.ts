import type { Establecimiento } from "../../../types/establecimiento.type.ts";
import { EstablecimientoApi } from "../../../api/establecimientos.api.ts";

const establecimientoApi = new EstablecimientoApi();

export default class EstablecimientoService  {
  public async getEstablecimientos() {
    return establecimientoApi.get<Establecimiento[]>();
  }
}
