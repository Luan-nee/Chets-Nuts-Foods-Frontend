import { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, X, Package, AlertTriangle, TrendingUp } from 'lucide-react';
import dataProducts from './data/productos.json';
import MetricCard from '../../components/MetricCard';
import ProductEditForm from './ProductEditForm';
import ProductCard from './ProductCard';

// Interfaz del producto
interface Product {
  id: number;
  sku: string;
  nombre: string;
  stock_actual: number;
  stock_minimo: number;
  porcentaje_ganancia: number;
  precio_compra_proveedor: number;
  descripcion: string;
  id_usuario_admin: number;
}

interface Response {
  status: number,
  message: string,
  info: Product[]
}

// Componente principal de inventario
export default function ProductosView() {
  // Datos de ejemplo
  const [products] = useState<Product[]>((dataProducts as Response).info);
  const [dataProductShowForm, setDataProductShowForm] = useState<Product>({
    id: 0,
    sku: '',
    nombre: '',
    stock_actual: 0,
    stock_minimo: 0,
    porcentaje_ganancia: 0,
    precio_compra_proveedor: 0,
    descripcion: '',
    id_usuario_admin: 0,
  }); 

  // Estados de filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [stockFilter, setStockFilter] = useState<'all' | 'low' | 'sufficient' | 'sinStock'>('all');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number>(0);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  // Productos filtrados
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filtro de búsqueda
      const matchesSearch = 
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descripcion?.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtro de stock
      const matchesStock = 
        stockFilter === 'all' ||
        (stockFilter === 'low' && product.stock_actual <= product.stock_minimo) ||
        (stockFilter === 'sufficient' && product.stock_actual > product.stock_minimo) ||
        (stockFilter === 'sinStock' && product.stock_actual === 0);

      // Filtro de precio
      const precioVenta = product.precio_compra_proveedor * (1 + product.porcentaje_ganancia);
      const matchesPrice = 
        priceRange === 'all' ||
        (priceRange === 'low' && precioVenta < 100) ||
        (priceRange === 'medium' && precioVenta >= 100 && precioVenta <= 500) ||
        (priceRange === 'high' && precioVenta > 500);

      return matchesSearch && matchesStock && matchesPrice;
    });
  }, [products, searchTerm, stockFilter, priceRange]);

  // Estadísticas
  const stats = useMemo(() => {
    const total = products.length;
    const lowStock = products.filter(p => p.stock_actual <= p.stock_minimo).length;
    const totalValue = products.reduce((sum, p) => sum + (p.precio_compra_proveedor * p.stock_actual), 0);
    const cantidadSinStock = products.filter(p => p.stock_actual === 0).length;
    return { total, lowStock, totalValue, cantidadSinStock };
  }, [products]);

  // Limpiar filtros
  const clearFilters = () => {
    setSearchTerm('');
    setStockFilter('all');
    setPriceRange('all');
  };

  const hasActiveFilters = searchTerm || stockFilter !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Inventario de Productos</h1>
          <p className="text-gray-600">Gestiona y visualiza todos tus productos</p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <MetricCard label="Total Productos" value={stats.total} simboloValue="" color="blue">
            <Package className="text-blue-600" size={24} />
          </MetricCard>

          <MetricCard label="Stock Bajo" value={stats.lowStock} simboloValue="" color="red">
            <AlertTriangle className="text-red-600" size={24} />
          </MetricCard>

          <MetricCard label="Valor Inventario" value={stats.totalValue.toFixed(2)} simboloValue="$" color="green">
            <TrendingUp className="text-green-600" size={24} />
          </MetricCard>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Búsqueda */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar por nombre, SKU o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Botón de filtros */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                showFilters ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              <SlidersHorizontal size={20} />
              Filtros
            </button>
          </div>

          {/* Panel de filtros expandible */}
          {showFilters && (
            <div className="border-t border-gray-200 pt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Filtro de stock */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Estado de Stock
                  </label>
                  <select
                    value={stockFilter}
                    onChange={(e) => setStockFilter(e.target.value as any)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="all">Todos</option>
                    <option value="low">Stock Bajo</option>
                    <option value="sufficient">Stock Suficiente</option>
                    <option value="sinStock">Sin Stock</option>
                  </select>
                </div>

                {/* Filtro de precio */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rango de Precio de Venta
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value as any)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="all">Todos</option>
                    <option value="low">Menos de $100</option>
                    <option value="medium">$100 - $500</option>
                    <option value="high">Más de $500</option>
                  </select>
                </div>
              </div>

              {/* Botón limpiar filtros */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-semibold text-sm"
                >
                  <X size={16} />
                  Limpiar Filtros
                </button>
              )}
            </div>
          )}
        </div>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold text-gray-800">{filteredProducts.length}</span> de{' '}
            <span className="font-semibold text-gray-800">{stats.total}</span> productos
          </p>
        </div>

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} selectProduct={setDataProductShowForm} getIdProducto={() => {setSelectedProductId(product.id)} } showEditForm={setIsEditFormOpen} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <Filter className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron productos</h3>
            <p className="text-gray-600 mb-4">Intenta ajustar los filtros de búsqueda</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Limpiar Filtros
              </button>
            )}
          </div>
        )}
      </div>

      {/* Formulario de edición de producto */}
      {
        isEditFormOpen && (
          <ProductEditForm  
          id = {dataProductShowForm.id}
          sku = {dataProductShowForm.sku}
          nombre = {dataProductShowForm.nombre}
          stock_actual = {dataProductShowForm.stock_actual}
          stock_minimo = {dataProductShowForm.stock_minimo}
          porcentaje_ganancia = {dataProductShowForm.porcentaje_ganancia}
          precio_compra_proveedor = {dataProductShowForm.precio_compra_proveedor}
          descripcion = {dataProductShowForm.descripcion}
          id_usuario_admin = {dataProductShowForm.id_usuario_admin}
          closeForm={setIsEditFormOpen} />
        )
      }
    </div>
  );
}