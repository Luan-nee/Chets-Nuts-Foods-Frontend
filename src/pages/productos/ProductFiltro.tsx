import { Search } from "lucide-react";

interface ProductFiltroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ProductFiltro({ searchTerm, setSearchTerm }: ProductFiltroProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl p-6 mb-6 border border-slate-700/50">
      <div className="relative group">
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-200"
          size={20}
        />
        <input
          type="text"
          placeholder="Buscar por nombre, SKU o descripción..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 
                     bg-slate-800/80 
                     text-slate-100
                     placeholder:text-slate-500
                     border border-slate-700/50
                     rounded-xl 
                     outline-none 
                     transition-all duration-200
                     focus:bg-slate-800
                     focus:border-blue-500/50
                     focus:ring-2 
                     focus:ring-blue-500/20
                     hover:border-slate-600/50"
        />
      </div>
    </div>
  );
}