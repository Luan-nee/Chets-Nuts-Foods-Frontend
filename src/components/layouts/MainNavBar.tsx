import { useAuth } from '../../context/AuthContext';
import NavBarAdministrador from './NavBarAdministrador';
import NavBarChofer from './NavBarChofer';
import NavBarTrabajador from './NavBarTrabajador';

export default function MainNavBar() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <div>Usuario no identificado</div>;
  }

  if (user?.role === 'administrador') {
    return <NavBarAdministrador />
  }

  if (user?.role === 'chofer') {
    return <NavBarChofer />
  }
  
  if (user?.role === 'trabajador') {
    return <NavBarTrabajador />
  }
}