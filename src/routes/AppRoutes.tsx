import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Productos from '../pages/administrador/Productos';
import Empleados from '../pages/test/Empleado';
import ListaGre from '../pages/administrador/ListaGre';
import Login from '../pages/Login';
import MainLayout from '../components/layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from '../context/AuthContext';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout>
                  <ListaGre />
                </MainLayout>
              </PrivateRoute> 
            }
          />
          <Route
            path="/guias"
            element={
              <PrivateRoute>
                <MainLayout>
                  <ListaGre />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/productos"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Productos />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/empleados"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Empleados />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
