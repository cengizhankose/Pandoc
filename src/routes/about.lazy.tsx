import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import WebApp from "@twa-dev/sdk";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
