import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Template from '../pages/test/Template';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* enlace de pagina Template.tsx */}
        <Route path="/" element={<Template />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </BrowserRouter>
  );
}