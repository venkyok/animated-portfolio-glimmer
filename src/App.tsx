import { Toaster as DefaultToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Works from "./pages/Works";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { LuminousCursor } from "./components/LuminousCursor";

const queryClient = new QueryClient();

const App = () => (
  <div style={{ position: "relative" }}>
    <QueryClientProvider client={queryClient}>
      <LuminousCursor />
      <TooltipProvider>
        <DefaultToaster />
        <SonnerToaster />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/works" element={<Works />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
