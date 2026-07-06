// app/(routes)/layout.tsx
import { Nav } from "@/app/components/NavButton";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* This renders the page content for /home, /search, etc. */}
      <main className="flex-grow">
        {children}
      </main>

      {/* The Navigation stays pinned here for all route-group pages */}
      <Nav />
    </div>
  );
}