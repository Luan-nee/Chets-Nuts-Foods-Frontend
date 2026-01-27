import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { UserRole } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('trabajador');
  const [loading, setLoading] = useState(false);

  const roles: { value: UserRole; label: string; color: string }[] = [
    { value: 'administrador', label: 'Administrador', color: 'from-blue-600 to-blue-700' },
    { value: 'chofer', label: 'Chofer', color: 'from-green-600 to-green-700' },
    { value: 'trabajador', label: 'Trabajador', color: 'from-purple-600 to-purple-700' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombres.trim() || !apellidos.trim()) {
      alert('Completa nombres y apellidos');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login({
        nombres: nombres.trim(),
        apellidos: apellidos.trim(),
        rol: selectedRole,
        id: crypto.randomUUID(),
        email: `${nombres.toLowerCase()}.${apellidos.toLowerCase()}@logitrans.com`,
      });
      setLoading(false);
      navigate('/');
    }, 400);
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
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nombres</label>
              <input
                type="text"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-700 transition"
                placeholder="Juan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Apellidos</label>
              <input
                type="text"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-700 transition"
                placeholder="Pérez"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Selecciona tu Rol</label>
              <div className="space-y-2">
                {roles.map((role) => (
                  <label key={role.value} className="flex items-center p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-800 transition">
                    <input
                      type="radio"
                      name="role"
                      value={role.value}
                      checked={selectedRole === role.value}
                      onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <span className="ml-3 flex-1 font-medium text-gray-300">{role.label}</span>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color}`} />
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading ? (
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
