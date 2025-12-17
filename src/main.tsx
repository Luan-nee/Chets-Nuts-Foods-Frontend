import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css'
import NotFound from './pages/NotFound.tsx';
import EstadisticasView from './pages/estadisticas/EstadisticasView.tsx';
import GuiasRemisionView from './pages/guias-remision/GuiasRemisionView.tsx';
import ProductosView from './pages/productos/ProductosView.tsx';
import NavBar from './layouts/NavBar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex h-screen">
        {/* Sidebar */}
        <NavBar />

        {/* Main Content Area */}
        {/* aplica un stylo tailwinds que sea similar a este color #0d1527 para el background */}
        <main className="flex-1 p-2 bg-slate-900 overflow-y-auto">
          <Routes>
            <Route path="/" element={<EstadisticasView />} />
            <Route path="/estadisticas" element={<EstadisticasView />} />
            <Route path="/guias-remision" element={<GuiasRemisionView />} />
            <Route path="/productos" element={<ProductosView />} />
            <Route path="*" element={<NotFound />} />

            {/* ruta para probar componentes */}
            {/* <Route path="/pruebas" element={<ProductEditForm />} /> */}
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  </StrictMode>,
)