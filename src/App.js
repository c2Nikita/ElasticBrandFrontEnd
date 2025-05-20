import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navelastic from "./components/navelastic/Navelastic";
import Footer from "./components/footer/Footer";
import ProductCard from "./components/product/ProductCard";
import ProductPage from "./components/product/ProductPage";
import "./styles/main.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (category = 't-shirt') => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/products/${category}`);
      if (!response.ok) {
        throw new Error(`Ошибка HTTP! статус: ${response.status}`);
      }
      const data = await response.json();

      // Обрабатываем данные независимо от того, массив это или одиночный объект
      const productArray = Array.isArray(data) ? data : [data];

      setProducts(productArray.map(item => {
        // Обрабатываем обе возможные структуры данных
        const product = item.product || item;
        return {
          id: product.id,
          image: product.photoURL,
          name: product.name,
          description: `${product.material.name}, ${product.material.composition}`,
          price: product.cost
        };
      }));
    } catch (error) {
      console.error('Ошибка:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navelastic onCategoryChange={fetchProducts} />

        <Routes>
          {/* Главная страница с товарами */}
          <Route path="/" element={
            <div className="back">
              {loading ? (
                <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>
                  Загрузка...
                </div>
              ) : (
                <div className="product-list">
                  {products.length > 0 ? (
                    products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  ) : (
                    <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>
                      Товары не найдены
                    </div>
                  )}
                </div>
              )}
            </div>
          } />

          {/* Страница товара */}
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
