import { useState } from 'react';
import { Search, Plus, Eye, Copy, Edit, Trash2, ChevronLeft, ChevronRight, Calendar, Truck, Package, Users, LayoutDashboard, Settings } from 'lucide-react';
import Table from '../../components/ui/Table';

export default function Template() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);

  const filters = [
    { name: 'Todos', color: 'bg-blue-600' },
    { name: 'Borrador', color: 'bg-blue-600' },
    { name: 'Enviado', color: 'bg-blue-600' },
    { name: 'Entregado', color: 'bg-blue-600' },
    { name: 'Anulado', color: 'bg-blue-600' }
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
      numero: 'T001-0000428',
      fecha: '26 Oct 2023',
      hora: '16:45 PM',
      cliente: 'Comercializadora Andina',
      ruc: 'RUC: 20567891234',
      origen: 'Lima',
      destino: 'Cusco',
      estado: 'ANULADO',
      estadoColor: 'bg-red-600'
    },
    {
      numero: 'T001-0000429',
      fecha: '27 Oct 2023',
      hora: '10:30 AM',
      cliente: 'Servicios Logísticos del Sur',
      ruc: 'RUC: 20345678912',
      origen: 'Lima',
      destino: 'Ica',
      estado: 'ENTREGADO',
      estadoColor: 'bg-green-600'
    }
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Gestión de Guías</h1>
            <p className="text-sm text-gray-400">Administra y emite tus documentos de transporte electrónico.</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-900 border-b border-gray-800 px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          
          {/* Search : FILTRO DESACTIVADO */}
          {/* 
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar por número de guía, cliente o RUC..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div> 
          */}

          {/* Date Range: FILTRO DESACTIVADO */}
          {/* 
            <button className="flex items-center gap-2 bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-300 px-4 py-2.5 rounded-lg text-sm transition-colors ml-4">
              <Calendar className="w-4 h-4" />
              Oct 01, 2023 - Oct 31, 2023
            </button> 
          */}
        </div>

        {/* Filter Tabs: FILTRADO DESACTIVADO */}
        {/* <div className="flex gap-2">
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
        </div> */}
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto px-8 py-6">
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <Table>
            {guias.map((guia, index) => (
              <RowTable key={index} guia={guia} index={index} />
            ))}
          </Table>
        </div>

        {/* Pagination : DESACTIVADO */}
        {/* 
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
        */}
      </div>
    </div>
  );
}

interface PropTable {
  guia: {
    numero: string;
    fecha: string;
    hora: string;
    cliente: string;
    ruc: string;
    origen: string;
    destino: string;
    estado: string;
    estadoColor: string;
  };
  index: number;
}

function RowTable({guia, index}: PropTable) {
  return (
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
        </div>
      </td>
    </tr>
  );
}