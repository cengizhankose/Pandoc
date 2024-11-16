import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shows")({
  component: ShowsPage,
});

function ShowsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-amber-600">
        Coming Soon
      </h1>
      <p className="text-center text-gray-500 mt-4">
        Our shows section is currently under development. Check back later!
      </p>
    </div>
  );
}
