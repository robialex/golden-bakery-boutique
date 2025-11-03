import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CategoryDetail from "./pages/CategoryDetail";
import Vegetarian from "./pages/Vegetarian";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:category" element={<CategoryDetail />} />
              <Route path="/menu/vegetarian" element={<Vegetarian />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
