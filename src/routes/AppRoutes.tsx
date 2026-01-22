import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/layouts/NavBar';
import Template from '../pages/test/Template';
import Productos from '../pages/test/Productos';
import Empleados from '../pages/test/Empleado';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-950 text-gray-100">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Template />} />
          <Route path="/guias" element={<Template />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/empleados" element={<Empleados />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
