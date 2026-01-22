import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Settings, Users, Package, LayoutDashboard, User } from 'lucide-react';

type LabelType = '/productos' | '/guias' | '/empleados';
type MenuItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  active: boolean;
  anchor: LabelType;
}
type UserProfile = {
  nombres: string,
  apellidos: string,
  rol: string
}

const userProfile: UserProfile = {
  nombres: 'Luan',
  apellidos: 'Del Sol',
  rol: 'Administrador'
}

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<LabelType>('/guias');

  let menuItems: MenuItem[] = [
    { icon: Package, label: 'Guías de Remisión', active: true, anchor: '/guias' },
    { icon: LayoutDashboard, label: 'Productos', active: false, anchor: '/productos' },
    { icon: Users, label: 'Empleados', active: false, anchor: '/empleados' }
  ];
  
  return (
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
        {
          menuItems.map((item) => (
            <NavItem key={item.label} anchor={item.anchor} active={activeSection === item.anchor} icon={item.icon} label={item.label} onClick={() => setActiveSection(item.anchor)} />
          ))
        }
      </nav>
    
      {/* User Profile Section */}
      <div className="absolute bottom-0 w-52 p-3 border-t border-gray-800">
        <button className="w-full flex gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
          <div className='flex items-center justify-center bg-gray-800 rounded-lg'>
            <User className="w-10 h-5" />
          </div>
          <div className="text-left w-full">
            <p className='text-xl2 text-white font-bold'>{userProfile.nombres}</p>
            <p className='text-xl2 text-white font-bold'>{userProfile.apellidos}</p>
            <p className="text-xs text-gray-400">{userProfile.rol}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

type NavItemProps = {
  active: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick: (p: string) => void;
  anchor: LabelType;
}

function NavItem({ active, icon: Icon, label, onClick, anchor }: NavItemProps) {
  return (
    <Link to={anchor}>
      <button
        onClick={() => onClick(label)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
          active
            ? 'bg-blue-600 text-white'
            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        }`}
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </button>
    </Link>
  );
}