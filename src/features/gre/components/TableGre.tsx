import Table from '../../../components/ui/Table';
import { Eye } from 'lucide-react';

interface PropTableGre {
  setShowDetallesGre: (p: boolean) => void;
  setSelectGreId: (p: number | null) => void;
}

export default function TableGre({ setShowDetallesGre, setSelectGreId }: PropTableGre) {
  const guias = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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

  const tableHeader: string[] = [
    'Nº Guía',
    'Fecha Emisión',
    'Cliente / Destinatario',
    'Punto de Partida / Llegada',
    'Estado',
    'Acciones'
  ];

  return (
    <Table tableHeader={tableHeader}>
      {guias.map((guia, index) => (
        <RowTable key={index} guia={guia} index={index} setShowDetallesGre={setShowDetallesGre} setSelectGreId={setSelectGreId} />
      ))}
    </Table>
  );
}

interface PropTable {
  guia: {
    id: number;
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
  setShowDetallesGre: (p: boolean) => void;
  setSelectGreId: (p: number | null) => void;
}

function RowTable({guia, index, setShowDetallesGre, setSelectGreId}: PropTable) {
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
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Ver" onClick={() => { setShowDetallesGre(true); setSelectGreId(guia.id); }}>
            <Eye className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </td>
    </tr>
  );
}