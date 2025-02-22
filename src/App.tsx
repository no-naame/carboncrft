import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { ProductCatalog } from './pages/ProductCatalog';
import { Header } from './components/layout/Header';
import { PageTransition } from './components/ui/PageTransition';

function App() {
  const location = useLocation();
  const isShippingPage = location.pathname === '/shipping';

  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,165,92,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(198,165,92,0.02)_0%,transparent_73%)]"></div>
      </div>

      {!isShippingPage && <Header />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/products" element={<PageTransition><ProductCatalog /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;