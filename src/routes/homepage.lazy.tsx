import { Homepage } from "@/components/homepage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/homepage")({
  component: HomePage,
});

function HomePage() {
  return <Homepage />;
}
