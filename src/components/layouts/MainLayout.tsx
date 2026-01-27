import React from 'react';
import { useAuth } from '../../context/AuthContext';
import NavBarAdministrador from './NavBarAdministrador';
import NavBarChofer from './NavBarChofer';
import NavBarTrabajador from './NavBarTrabajador';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <>{children}</>;
  }

  const renderNav = () => {
    switch (user.rol) {
      case 'administrador':
        return <NavBarAdministrador />;
      case 'chofer':
        return <NavBarChofer />;
      case 'trabajador':
        return <NavBarTrabajador />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      {renderNav()}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
