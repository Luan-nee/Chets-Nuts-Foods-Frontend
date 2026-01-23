import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/layouts/NavBar';
import Productos from '../pages/administrador/Productos';
import Empleados from '../pages/test/Empleado';
import ListaGre from '../pages/administrador/ListaGre';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-950 text-gray-100">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ListaGre />} />
          <Route path="/guias" element={<ListaGre />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/empleados" element={<Empleados />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
