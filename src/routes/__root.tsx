import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        {/* Your layout components */}
        <div className="flex flex-col min-h-screen bg-black text-white">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
      {import.meta.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
    </>
  ),
});
