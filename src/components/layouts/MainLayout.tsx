import MainNavBar from "./MainNavBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100">
      <MainNavBar />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
