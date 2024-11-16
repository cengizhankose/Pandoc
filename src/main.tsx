import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WebApp from "@twa-dev/sdk";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  // Add defaultPreload: 'intent' for better UX
  defaultPreload: "intent",
  basepath: "/Pandoc",
});

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

WebApp.ready();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
