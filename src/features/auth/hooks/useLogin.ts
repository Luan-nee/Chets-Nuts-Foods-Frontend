import { useState, useCallback, useMemo } from 'react';
import type { ResponseSesion, Credenciales } from '../../../types/usuario.type';
import { UsuarioService } from '../services/usuario.service';

interface FetchState {
  login: (credenciales: Credenciales) => Promise<ResponseSesion | null>;
  isLoading: boolean;
  error: string | null;
  data: ResponseSesion | null;
}

export const useLogin = (): FetchState => {
  const usuarioService = useMemo(() => new UsuarioService(), []);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ResponseSesion | null>(null);

  // En tu useLogin.ts
  const login = useCallback(async (credenciales: Credenciales): Promise<ResponseSesion | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await usuarioService.login(credenciales);

      if (response.status === "success") {
        setData(response.data);

        // Guarda el token en el localStorage, pero en el futuro se espera guardar
        // en una cookie HttpOnly para mayor seguridad
        localStorage.setItem('token', response.data.tokenZ);


        return response.data; // <--- Retornamos el valor aquí
      } else {
        throw new Error(response.message);
      }
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [usuarioService]);

  return { login, isLoading, error, data };
};