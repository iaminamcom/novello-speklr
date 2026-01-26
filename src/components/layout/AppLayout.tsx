import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex items-start min-h-screen bg-background p-6 gap-3 max-w-480 mx-auto">
      <Sidebar />
      <main className="flex-1 grid lg:grid-cols-12 gap-2.5 gap-x-3">{children}</main>
    </div>
  );
}
