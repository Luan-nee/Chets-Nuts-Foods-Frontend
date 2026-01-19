import { useState, useEffect } from 'react';

type APIResponse = {
  status: number;
  data: any;
}

interface PropProduct{ // Los datos que voy a recibir de la API
  id: number;
  sku: string;
  nombre: string;
  stock_actual: number;
  stock_minimo: number;
  precio_compra_proveedor: number;
  porcentaje_ganancia: number;
  descripcion: string;
  id_administrador: number;
}

export default function useFetcher(url: string){
  const [data, setData] = useState<any>(null);
  
  useEffect(
    () => {
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => {
          console.error('Error fetching data:', error);
          setData(null);
        });  
    },
  []);

  return { data };
}