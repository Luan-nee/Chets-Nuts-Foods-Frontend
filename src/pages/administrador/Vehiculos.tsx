import { Plus, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import TableVehiculos from "../../features/vehiculos/components/TableVehiculos";
import { useState } from "react";

export default function Vehiculos() {
  const [showFormUpdate, setShowFormUpdate] = useState(false);
  const [selectVehiculoId, setSelectVehiculoId] = useState<number | null>(null);

  return (
    <div className="relative flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Gestión de vehículos</h2>
            <p className="text-sm text-gray-400">Gestiona la información de tus vehículos.</p>
          </div>
          <button 
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
            <Plus className="w-5 h-5" />
            Nuevo Vehículo
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-900 border-b border-gray-800 px-8 py-4">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar un vehículo..."
              className="w-full bg-gray-950 border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Filter */}
          <button className="flex items-center gap-2 bg-gray-950 border border-gray-800 hover:border-gray-700 text-gray-300 px-4 py-2.5 rounded-lg text-sm transition-colors">
            <span>Filtra según...</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Filter Button */}
          <button className="p-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto px-8 py-6">
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          {/* <TableGre setShowDetallesGre={setShowDetallesGre} setSelectGreId={setSelectGreId} /> */}
          <TableVehiculos setShowFormUpdate={setShowFormUpdate} setSelectVehiculoId={setSelectVehiculoId} />
        </div>

        {/* Pagination : DESACTIVADO */}
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
  );
}