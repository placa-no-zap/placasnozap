import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Placas from "./pages/Placas";
import Cpf from "./pages/Cpf";
import CpfPlanos from "./pages/CpfPlanos";
import NotFound from "./pages/NotFound";
import PlacasPlanos from "./pages/PlacasPlanos";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/placas" element={<Placas />} />
            <Route path="/planos" element={<Navigate to="/placas/planos" replace />} />
            <Route path="/placas/planos" element={<PlacasPlanos />} />
            <Route path="/cpf" element={<Cpf />} />
            <Route path="/cpf/planos" element={<CpfPlanos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
