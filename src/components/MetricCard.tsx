import Loading from "../animation/Loading";
import { XCircle, CheckCircle } from 'lucide-react'; // Importamos iconos para el estado de error y el valor por defecto

interface MetricCardProps {
  name: string;
  value: number;
  color: string;
  isError?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  simboloValue?: string;
}

type colorMetricCardProp = {
  [key: string]: {
    bgColor: string;
    textColor: string;
    bgClasses: string;
  };
}

const colorMetricCard: colorMetricCardProp = {
  blue: {
    bgColor: "bg-blue-500",
    textColor: "text-blue-500",
    bgClasses: "from-blue-900/50 to-blue-800/30 border border-blue-700/50"
  },
  green: {
    bgColor: "bg-green-500",
    textColor: "text-green-500",
    bgClasses: "from-green-900/50 to-green-800/30 border border-green-700/50"
  },
  red: {
    bgColor: "bg-red-500",
    textColor: "text-red-500",
    bgClasses: "from-red-900/50 to-red-800/30 border border-red-700/50"
  },
  yellow: {
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-500",
    bgClasses: "from-yellow-900/50 to-yellow-800/30 border border-yellow-700/50"
  },
}

export default function MetricCard({ 
  name, 
  value, 
  color, 
  isError, 
  isLoading, 
  children,
  simboloValue = ''
}: MetricCardProps) {

  // --- 1. Definición de Clases Base para Tailwind ---
  const baseClasses = `bg-gradient-to-br rounded-xl p-6 transition-all duration-300`;
  const customColor = colorMetricCard[color] || colorMetricCard["blue"];

  // --- 2. Manejo del Estado de Carga (isLoading) ---
  if (isLoading) {
    return (
      <div className={`${baseClasses} ${customColor.bgClasses} flex items-center justify-center h-32`}>
        {/* Usamos el componente Loading con el color de la tarjeta */}
        <Loading w={8} h={8} color={color} />
        <p className={`ml-3 text-slate-400 font-medium`}>Cargando...</p>
      </div>
    );
  }

  // --- 3. Manejo del Estado de Error (isError) ---
  if (isError) {
    // Usamos clases de color rojo/error para indicar el fallo
    return (
      <div className={`${baseClasses} bg-red-900/50 border border-red-700/50 flex items-center h-32`}>
        <div className="flex items-center">
          <XCircle className="w-8 h-8 text-red-400 mr-4" />
          <div>
            <p className="text-red-300 text-sm font-medium mb-1">
              {name}
            </p>
            <p className="text-xl font-bold text-white">Error de Carga</p>
          </div>
        </div>
      </div>
    );
  }

  // --- 4. Renderizado Normal (Éxito) ---
  return (
    <div className={`${baseClasses} ${customColor.bgClasses}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`${customColor.textColor} text-sm font-medium mb-1`}>
            {name}
          </p>
          {/* El valor solo se muestra si NO está cargando y NO hay error */}
          <p className="text-3xl font-bold text-white">{`${simboloValue || ''} ${value}`}</p>
        </div>
        {/* El children (normalmente un icono) se muestra solo en el estado de éxito */}
        <div className={`w-12 h-12 ${customColor.bgColor} rounded-lg flex items-center justify-center`}>
          {children || <CheckCircle className="w-6 h-6 text-white" />}
        </div>
      </div>
    </div>
  );
}