import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../features/auth/hooks/useLogin';
import { Truck, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { User, Credenciales } from '../types/usuario.type';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const { login, isLoading, error } = useLogin();
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  
  const handleLogin = async () => {
    if (!usuario.trim() || !contrasenia.trim()) {
      alert('Es necesario ingresar usuario y contraseña');
      return;
    }

    const credenciales: Credenciales = {
      usuario: usuario.trim(),
      contrasenia: contrasenia.trim()
    };

    const response = await login(credenciales);

    console.log("Login response data:", response, "Error:", error);
    if (response && !error) {
      const token = response.access_token;
      const decoded = jwtDecode<User>(token);
      authLogin(decoded);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h1 className="font-bold text-2xl text-white">LogiTrans ERP</h1>
              <p className="text-sm text-gray-400">Gestión Logística</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Iniciar Sesión</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Usuario</label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-700 transition"
                placeholder="Juan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
              <input
                type="password"
                value={contrasenia}
                onChange={(e) => setContrasenia(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-700 transition"
                placeholder="Pérez"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-white rounded-full animate-spin" />
                  Cargando...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Iniciar Sesión
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}