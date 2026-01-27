'use client';

import ThemedSidebar from "./ThemedSidebar";

export default function ThemedAppLayout({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-start min-h-screen bg-background p-6 gap-3 max-w-480 mx-auto ${className}`}>
      <ThemedSidebar />
      <main className="flex-1 grid lg:grid-cols-12 gap-2.5 gap-x-3">{children}</main>
    </div>
  );
}
