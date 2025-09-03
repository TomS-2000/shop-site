import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import MarketPage from './components/pages/MarketPage';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import ProductPage from './components/pages/ProductPage';
import Contact from './components/pages/Contact';
import Cart from "./components/pages/Cart";


const App = () => {

  return (
    <ThemeProvider defaultTheme='system'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:cat" element={<MarketPage />} />
          <Route path="/search/:query" element={<MarketPage />} />
          <Route path="/search" element={<MarketPage />} />
          <Route path="/product/:pid" element={<ProductPage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
