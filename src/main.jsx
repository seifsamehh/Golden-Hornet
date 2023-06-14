import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <App />
            <Analytics />
          </HelmetProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);
