import { useState } from 'react';
import { Search, Plus, Eye, Copy, Edit, Trash2, ChevronLeft, ChevronRight, Calendar, Truck, Package, Users, LayoutDashboard, Settings } from 'lucide-react';

export default function Template() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);

  const filters = [
    { name: 'Todos', color: 'bg-blue-600' },
    { name: 'Borrador', color: 'bg-gray-600' },
    { name: 'Enviado', color: 'bg-blue-500' },
    { name: 'Entregado', color: 'bg-green-600' },
    { name: 'Anulado', color: 'bg-red-600' }
  ];

  const guias = [
    {
      numero: 'T001-0000425',
      fecha: '24 Oct 2023',
      hora: '14:20 PM',
      cliente: 'Corporación Alimentos S.A.',
      ruc: 'RUC: 20123456789',
      origen: 'Lima',
      destino: 'Trujillo',
      estado: 'ENTREGADO',
      estadoColor: 'bg-green-600'
    },
    {
      numero: 'T001-0000426',
      fecha: '25 Oct 2023',
      hora: '09:15 AM',
      cliente: 'Distribuidora Norte SAC',
      ruc: 'RUC: 20456789123',
      origen: 'Lima',
      destino: 'Chiclayo',
      estado: 'ENVIADO',
      estadoColor: 'bg-blue-500'
    },
    {
      numero: 'T001-0000427',
      fecha: '25 Oct 2023',
      hora: '11:00 AM',
      cliente: 'Inversiones Metalúrgicas',
      ruc: 'RUC: 20987654321',
      origen: 'Callao',
      destino: 'Arequipa',
      estado: 'BORRADOR',
      estadoColor: 'bg-gray-600'
    }
  ];

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: Package, label: 'Guías de Remisión', active: true },
    { icon: Users, label: 'Clientes', active: false },
    { icon: Truck, label: 'Vehículos', active: false },
    { icon: Calendar, label: 'Inventario', active: false }
  ];

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      {/* Sidebar */}
      <div className="w-52 bg-gray-900 border-r border-gray-800">
        {/* Logo */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-white">LogiTrans ERP</h1>
              <p className="text-xs text-gray-400">Gestión Logística</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-3 space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Settings */}
        <div className="absolute bottom-0 w-52 p-3 border-t border-gray-800">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            <span>Configuración</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-900 border-b border-gray-800 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Gestión de Guías</h1>
              <p className="text-sm text-gray-400">Administra y emite tus documentos de transporte electrónico.</p>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
              <Plus className="w-5 h-5" />
              Emitir Guía
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-900 border-b border-gray-800 px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar por número de guía, cliente o RUC..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Date Range */}
            <button className="flex items-center gap-2 bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-300 px-4 py-2.5 rounded-lg text-sm transition-colors ml-4">
              <Calendar className="w-4 h-4" />
              Oct 01, 2023 - Oct 31, 2023
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter.name
                    ? `${filter.color} text-white`
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto px-8 py-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Nº Guía</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Fecha Emisión</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Cliente / Destinatario</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Punto de Partida / Llegada</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Estado</th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {guias.map((guia, index) => (
                  <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-blue-400 font-medium">{guia.numero}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-gray-300">{guia.fecha}</div>
                        <div className="text-gray-500">{guia.hora}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-gray-300 font-medium">{guia.cliente}</div>
                        <div className="text-gray-500">{guia.ruc}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{guia.origen}</span>
                        <span>→</span>
                        <span>{guia.destino}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${guia.estadoColor} text-white`}>
                        {guia.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Ver">
                          <Eye className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Copiar">
                          <Copy className="w-4 h-4 text-gray-400" />
                        </button>
                        {guia.estado === 'BORRADOR' && (
                          <>
                            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Editar">
                              <Edit className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Eliminar">
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-400">
              Mostrando <span className="font-medium text-gray-300">1</span> a <span className="font-medium text-gray-300">10</span> de <span className="font-medium text-gray-300">128</span> resultados
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium">1</button>
              <button className="px-3 py-1.5 hover:bg-gray-800 text-gray-400 rounded-lg text-sm font-medium transition-colors">2</button>
              <button className="px-3 py-1.5 hover:bg-gray-800 text-gray-400 rounded-lg text-sm font-medium transition-colors">3</button>
              <span className="px-2 text-gray-500">...</span>
              <button className="px-3 py-1.5 hover:bg-gray-800 text-gray-400 rounded-lg text-sm font-medium transition-colors">13</button>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}