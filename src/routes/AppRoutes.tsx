import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from '../pages/administrador/Productos';
import ListaGre from '../pages/administrador/ListaGre';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
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

          <Route path="*" element={
              <PrivateRoute>
                <MainLayout>
                  <NotFound />
                </MainLayout>
              </PrivateRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
