import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import WebApp from "@twa-dev/sdk";

export const Route = createLazyFileRoute("/my-list")({
  component: MyListPage,
});

function MyListPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
    </>
  );
}
