import { Truck, Package, ChevronRight, Printer, Download, Info, MapPin} from 'lucide-react';

interface DetallesGreProps {
  showDetallesGre: (p: boolean) => void;
}

export default function DetallesGre({ showDetallesGre }: DetallesGreProps) {
    const productos = [
    { item: '01', sku: 'LAP-001-H', descripcion: 'Laptop Enterprise Pro 15"', unidad: 'UND', cantidad: 10, peso: 25.00 },
    { item: '02', sku: 'ARZ-PER-01', descripcion: 'Arroz Extra Costeño 50kg', unidad: 'SAC', cantidad: 40, peso: 200.00 },
    { item: '03', sku: 'CMT-AND-42', descripcion: 'Cemento Andino Tipo I 42.5kg', unidad: 'BOL', cantidad: 60, peso: 510.00 },
    { item: '04', sku: 'ACE-VEG-05', descripcion: 'Aceite Vegetal Bidón 5L', unidad: 'BID', cantidad: 5, peso: 22.50 },
    { item: '05', sku: 'LECH-GL-01', descripcion: 'Caja de Leche Evaporada 48u', unidad: 'CAJ', cantidad: 2, peso: 38.00 },
    { item: '06', sku: 'AZU-CAR-01', descripcion: 'Azúcar Rubia Cartavio 1kg', unidad: 'UND', cantidad: 3, peso: 60.00 }
  ];

  return (
    <div className="flex-1 h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <span>Guías de Remisión</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Detalle</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-white">EG07-00000001</h1>
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-600 text-white">
              ENTREGADO
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* botón para cerrar */}
            <button
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors border border-gray-700"
              title="Cerrar Detalles"
              onClick={() => showDetallesGre(false)}
            >
              <ChevronRight className="w-5 h-5 text-gray-400 rotate-180" />
              Regresar
            </button>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors border border-gray-700">
              <Printer className="w-5 h-5" />
              Imprimir
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
              <Download className="w-5 h-5" />
              Descargar PDF
            </button>
          </div>
        </div>
        
        <div className="mt-2">
          <p className="text-sm text-gray-400">
            Código de Seguimiento: <span className="text-gray-300 font-mono">CCD-000001</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-8 py-6">
        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Información General */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <Info className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">INFORMACIÓN GENERAL</h2>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Fecha de Emisión</p>
                <p className="text-sm text-white font-medium">28 de Octubre, 2023</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Hora de Registro</p>
                <p className="text-sm text-white font-medium">10:45 AM</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Observaciones</p>
                <p className="text-sm text-gray-300 italic">Carga refrigerada. Mantener temperatura constante a 4°C durante el trayecto.</p>
              </div>
            </div>
          </div>

          {/* Remitente y Destinatario */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">REMITENTE Y DESTINATARIO</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Remitente</p>
                <p className="text-sm text-white font-semibold">Logística Central S.A.C.</p>
                <p className="text-xs text-gray-400">RUC: 20123456789</p>
                <p className="text-xs text-gray-400">Av. Industrial 450, Lima</p>
              </div>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-xs text-gray-500 uppercase mb-1">Destinatario</p>
                <p className="text-sm text-white font-semibold">Corporación Alimentos S.A.</p>
                <p className="text-xs text-gray-400">RUC: 20123456789</p>
                <p className="text-xs text-gray-400">Jr. Los Pinos 123, Trujillo</p>
              </div>
            </div>
          </div>

          {/* Detalles del Transporte */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-lg font-semibold text-white">DETALLES DEL TRANSPORTE</h2>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Conductor</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold">JP</span>
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">Juan José Pérez Quispe</p>
                    <p className="text-xs text-gray-400">Licencia: Q45678901</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Vehículo</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <Truck className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">Volvo FH - ABC-123</p>
                    <div className="flex gap-3 text-xs text-gray-400">
                      <span>Tipo: M3</span>
                      <span>Cap: 32t</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Detalle de Productos (8 Items)</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-950">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Item</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">SKU / Código</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Descripción</th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Unidad</th>
                  <th className="text-center px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Cantidad</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Peso Total (KG)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {productos.map((producto) => (
                  <tr key={producto.item} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-gray-400 font-medium">{producto.item}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-blue-400 font-mono text-sm">{producto.sku}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white">{producto.descripcion}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">{producto.unidad}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-white font-medium">{producto.cantidad}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-white font-medium">{producto.peso.toFixed(2)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Card */}
        <div className="flex justify-end">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 w-96">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-5 h-5 text-blue-400" />
              <h3 className="text-base font-semibold text-white uppercase">Resumen de Carga</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Cantidad Total:</span>
                <span className="text-lg font-bold text-white">120 Unidades</span>
              </div>
              <div className="border-t border-gray-800 pt-3 flex justify-between items-center">
                <span className="text-sm text-gray-400">Peso Total:</span>
                <span className="text-2xl font-bold text-blue-400">855.50 kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}