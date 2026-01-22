import { Plus } from 'lucide-react';

export default function Productos() {
  return (
    // lita de productos
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Gestión de Productos</h1>
            <p className="text-sm text-gray-400">Administra y emite tus documentos de transporte electrónico.</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
            <Plus className="w-5 h-5" />
            Nuevo Producto
          </button>
        </div>
      </div>
    </div>
  );
}