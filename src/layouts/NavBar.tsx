import { X, FileText, Menu, Package, BarChart } from "lucide-react";
import NavItem from "../components/NavItem";
import { useState, useEffect } from "react";

// const STORAGE_KEY = 'activeSection';

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItemProps[] = [
    { label: 'Estadisticas', icon: <BarChart size={20} />, href: '/estadisticas' },
    { label: 'Productos', icon: <Package size={20} />, href: '/productos' },
    { label: 'Guias de remision', icon: <FileText size={20} />, href: '/guias-remision' },
  ];

const STORAGE_KEY_NAV = 'navBarActiveItem';

export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState((): number => {
    const savedTab = localStorage.getItem(STORAGE_KEY_NAV);
    return savedTab ? parseInt(savedTab) : 0;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_NAV, activeItem.toString());
  }, [activeItem])

  return (
    <nav
        className={`flex flex-col justify-between ${
          isCollapsed ? 'w-20' : 'w-64'
        } bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 ease-in-out shadow-2xl`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-700">
          {!isCollapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Guías de remisión
            </h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-grow flex-col py-6 px-3 gap-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              href={item.href}
              label={item.label}
              isActive={activeItem === index}
              isCollapsed={isCollapsed}
              onClick={() => setActiveItem(index)}
            >
              {item.icon}
            </NavItem>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">
              U
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium">Usuario</p>
                <p className="text-xs text-slate-400">usuario@email.com</p>
              </div>
            )}
          </div>
        </div>
      </nav>
  );
}
