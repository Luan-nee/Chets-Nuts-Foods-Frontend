import { FileText, Package, BarChart } from "lucide-react";

interface PropRoute {
  text: string;
  icon: React.ReactNode;
  href: string;
}

export const routes: PropRoute[] = [
  { text: "Estadisticas", icon: <BarChart size={20} />, href: "/estadisticas" },
  { text: "Productos", icon: <Package size={20} />, href: "/productos" },
  {
    text: "Guias de remision",
    icon: <FileText size={20} />,
    href: "/guias-remision",
  },
];
