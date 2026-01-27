import { useAuth } from '../../context/AuthContext';
import NavBarAdministrador from './NavBarAdministrador';
import NavBarChofer from './NavBarChofer';
import NavBarTrabajador from './NavBarTrabajador';

export default function MainNavBar() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <div>Usuario no identificado</div>;
  }

  if (user?.rol === 'administrador') {
    return <NavBarAdministrador />
  }

  if (user?.rol === 'chofer') {
    return <NavBarChofer />
  }
  
  if (user?.rol === 'trabajador') {
    return <NavBarTrabajador />
  }
}