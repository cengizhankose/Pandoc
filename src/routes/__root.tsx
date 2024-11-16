import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "@/components/ui/header";

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        {/* Your layout components */}
        <div className="flex flex-col min-h-screen bg-black text-white">
          <Header />
          <main className="py-14">
            <Outlet />
          </main>
        </div>
      </div>
      {import.meta.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
    </>
  ),
});
