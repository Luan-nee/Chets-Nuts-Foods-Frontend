
export type simpleGreType = {
  id: number;
  numero: string;
  clave: string;
  fecha_emision: string;
  hora: string;
  destinatario: {
    nombre_razonSocial: string;
    tipo_documento: string;
    numero_documento: string;
  };
  punto_de_partida: string;
  punto_de_llegada: string;
  estado: "entregado" | "en tránsito" | "pendiente";
};