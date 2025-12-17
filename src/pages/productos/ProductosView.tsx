import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  Package,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import dataProducts from "./data/productos.json";
import MetricCard from "../../components/MetricCard";
import ProductEditForm from "./ProductEditForm";
import ProductCard from "./ProductCard";
import ProductFiltro from "./ProductFiltro";

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
  status: number;
  message: string;
  info: Product[];
}

// Componente principal de inventario
export default function ProductosView() {
  // Datos de ejemplo
  const [products] = useState<Product[]>((dataProducts as Response).info);
  const [dataProductShowForm, setDataProductShowForm] = useState<Product>({
    id: 0,
    sku: "",
    nombre: "",
    stock_actual: 0,
    stock_minimo: 0,
    porcentaje_ganancia: 0,
    precio_compra_proveedor: 0,
    descripcion: "",
    id_usuario_admin: 0,
  });

  // Estados de filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [stockFilter, setStockFilter] = useState<
    "all" | "low" | "sufficient" | "sinStock"
  >("all");
  const [priceRange, setPriceRange] = useState<
    "all" | "low" | "medium" | "high"
  >("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number>(0);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  // Productos filtrados
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filtro de búsqueda
      const matchesSearch =
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descripcion?.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtro de stock
      const matchesStock =
        stockFilter === "all" ||
        (stockFilter === "low" &&
          product.stock_actual <= product.stock_minimo) ||
        (stockFilter === "sufficient" &&
          product.stock_actual > product.stock_minimo) ||
        (stockFilter === "sinStock" && product.stock_actual === 0);

      // Filtro de precio
      const precioVenta =
        product.precio_compra_proveedor * (1 + product.porcentaje_ganancia);
      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "low" && precioVenta < 100) ||
        (priceRange === "medium" && precioVenta >= 100 && precioVenta <= 500) ||
        (priceRange === "high" && precioVenta > 500);

      return matchesSearch && matchesStock && matchesPrice;
    });
  }, [products, searchTerm, stockFilter, priceRange]);

  // Estadísticas
  const stats = useMemo(() => {
    const total = products.length;
    const lowStock = products.filter(
      (p) => p.stock_actual <= p.stock_minimo
    ).length;
    const totalValue = products.reduce(
      (sum, p) => sum + p.precio_compra_proveedor * p.stock_actual,
      0
    );
    const cantidadSinStock = products.filter(
      (p) => p.stock_actual === 0
    ).length;
    return { total, lowStock, totalValue, cantidadSinStock };
  }, [products]);

  // Limpiar filtros
  const clearFilters = () => {
    setSearchTerm("");
    setStockFilter("all");
    setPriceRange("all");
  };

  const hasActiveFilters =
    searchTerm || stockFilter !== "all" || priceRange !== "all";

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-200 mb-2">
            Inventario de Productos
          </h1>
          <p className="text-gray-200">
            Gestiona y visualiza todos tus productos
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <MetricCard name="Total Productos" value={stats.total} color="blue">
            <Package className="w-6 h-6 text-white" size={24} />
          </MetricCard>

          <MetricCard name="Stock Bajo" value={stats.lowStock} color="red">
            <AlertTriangle className="w-6 h-6 text-white" size={24} />
          </MetricCard>

          <MetricCard
            name="Valor Inventario"
            value={stats.totalValue}
            simboloValue="$"
            color="green"
          >
            <TrendingUp className="w-6 h-6 text-white" size={24} />
          </MetricCard>
        </div>

        {/* Barra de búsqueda y filtros */}
        <ProductFiltro
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-gray-300">
            Mostrando{" "}
            <span className="font-bold text-gray-400">
              {filteredProducts.length}
            </span>{" "}
            de{" "}
            <span className="font-bold text-gray-400">
              {stats.total}
            </span>{" "}
            productos
          </p>
        </div>

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                selectProduct={setDataProductShowForm}
                getIdProducto={() => {
                  setSelectedProductId(product.id);
                }}
                showEditForm={setIsEditFormOpen}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <Filter className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta ajustar los filtros de búsqueda
            </p>
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
      {isEditFormOpen && (
        <ProductEditForm
          id={dataProductShowForm.id}
          sku={dataProductShowForm.sku}
          nombre={dataProductShowForm.nombre}
          stock_actual={dataProductShowForm.stock_actual}
          stock_minimo={dataProductShowForm.stock_minimo}
          porcentaje_ganancia={dataProductShowForm.porcentaje_ganancia}
          precio_compra_proveedor={dataProductShowForm.precio_compra_proveedor}
          descripcion={dataProductShowForm.descripcion}
          id_usuario_admin={dataProductShowForm.id_usuario_admin}
          closeForm={setIsEditFormOpen}
        />
      )}
    </div>
  );
}
