import { useState } from 'react';
import { ArrowLeft, Info, Tag, PackageSearch, DollarSign, Search } from 'lucide-react';

interface PropFormUpdateProducto {
  setShowFromUpdateProducto: (p: boolean) => void;
}

export default function FormUpdateProducto({ setShowFromUpdateProducto }: PropFormUpdateProducto) {
  const [precioCompra, setPrecioCompra] = useState('100.00');
  const [ganancia, setGanancia] = useState('0.30');
  const [stockIngresado, setStockIngresado] = useState('140');
  const [stockMinimo, setStockMinimo] = useState('50');

  const calcularPrecioVenta = () => {
    const precio = parseFloat(precioCompra) || 0;
    const margen = parseFloat(ganancia) || 0;
    return (precio * (1 + margen)).toFixed(2);
  };

  const calcularPorcentaje = () => {
    return Math.round(parseFloat(ganancia) * 100);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-8 py-6">
        <button 
          onClick={() => setShowFromUpdateProducto(false)}
        className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mb-3">
          <ArrowLeft className="w-4 h-4" />
          VOLVER A INVENTARIO
        </button>

        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Nuevo Producto</h2>
          <p className="text-sm text-gray-400">Ingresa los detalles para registrar un nuevo artículo en el catálogo logístico.</p>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-auto px-8 py-6">
        <div className="space-y-6">
          {/* Información Básica */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <div className="px-6 py-4 bg-gray-800/50 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white uppercase">Información Básica</h3>
              </div>
            </div>
            
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Nombre del Producto</label>
                <input
                  type="text"
                  placeholder="Ej: Pallet de Madera Estándar"
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Descripción</label>
                <textarea
                  rows={4}
                  placeholder="Detalles técnicos, dimensiones o especificaciones del material..."
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Categoría */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <div className="px-6 py-4 bg-gray-800/50 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white uppercase">Categoría</h3>
              </div>
            </div>
            
            <div className="p-6">
              <label className="block text-sm text-gray-400 mb-2">Seleccionar Categoría</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select className="w-full bg-gray-950 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none cursor-pointer">
                  <option>Buscar categoría...</option>
                  <option>Materiales de Construcción</option>
                  <option>Alimentos y Bebidas</option>
                  <option>Electrónica</option>
                  <option>Textiles</option>
                  <option>Productos Químicos</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Gestión de Inventario */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <div className="px-6 py-4 bg-gray-800/50 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <PackageSearch className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white uppercase">Gestión de Inventario</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Stock Ingresado</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={stockIngresado}
                      onChange={(e) => setStockIngresado(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">Unidades</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Stock Mínimo (Alerta)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={stockMinimo}
                      onChange={(e) => setStockMinimo(e.target.value)}
                      className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">Unidades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuración de Precios */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <div className="px-6 py-4 bg-gray-800/50 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white uppercase">Configuración de Precios</h3>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Precio de Compra Proveedor</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      value={precioCompra}
                      onChange={(e) => setPrecioCompra(e.target.value)}
                      step="0.01"
                      className="w-full bg-gray-950 border border-gray-700 rounded-lg pl-8 pr-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Ganancia (Margen)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={ganancia}
                      onChange={(e) => setGanancia(e.target.value)}
                      step="0.01"
                      className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-green-400">
                      {calcularPorcentaje()}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Precio de Venta Sugerido */}
              <div className="bg-blue-950/30 border border-blue-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-300">Precio de Venta Sugerido:</span>
                  <span className="text-2xl font-bold text-blue-400">$ {calcularPrecioVenta()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-gray-900 border-t border-gray-800 px-8 py-4">
        <div className="flex items-center justify-end gap-3">
          <button 
          onClick={() => setShowFromUpdateProducto(false)}
          className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
            Cancelar
          </button>
          <button 
          onClick={() => setShowFromUpdateProducto(false)}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Actualizar información del producto
          </button>
        </div>
      </div>
    </div>
  );
}