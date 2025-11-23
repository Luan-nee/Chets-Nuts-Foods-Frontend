import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
  children: any;
  onClick: () => void;
}

function NavItem({
  href,
  label,
  isActive,
  isCollapsed,
  children,
  onClick,
}: NavItemProps) {
  return (
    <Link to={href}>
      <button
        onClick={() => onClick()}
        className={`flex w-full items-center px-4 py-3 gap-4 rounded-lg transition-all duration-200 group 
            ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50" : "hover:bg-slate-700 text-slate-300 hover:text-white"}
            ${isCollapsed ? 'justify-center' : 'justify-start'}
          `
        }
      >
        <div
          className={`${
            isActive ? "text-white" : "text-slate-400 group-hover:text-white"
          }`}
        >
          {children}
        </div>
        {!isCollapsed && <div className="font-medium text-sm">{label}</div>}
      </button>
    </Link>
  );
}

export default NavItem;
