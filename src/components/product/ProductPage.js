import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Ошибка загрузки товара:', error);
        // Пробуем альтернативный endpoint, если первый не сработал
        try {
          const response = await axios.get(`http://localhost:8080/products/${id}`);
          setProduct(response.data);
        } catch (secondError) {
          console.error('Ошибка при альтернативном запросе:', secondError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.5rem'
    }}>
      Загрузка...
    </div>
  );

  if (!product) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.5rem'
    }}>
      Товар не найден
    </div>
  );

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.2rem',
          marginBottom: '20px',
          color: '#333'
        }}
      >
        ← Назад в магазин
      </button>

      <div style={{
        display: 'flex',
        gap: '40px',
        flexDirection: window.innerWidth < 768 ? 'column' : 'row'
      }}>
        <div style={{ flex: 1 }}>
          <img
            src={product.photoURL}
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: '500px',
              borderRadius: '8px',
              border: '1px solid #eee'
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: '2rem',
            marginBottom: '15px',
            color: '#333'
          }}>
            {product.name}
          </h1>

          <p style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333'
          }}>
            {product.cost} ₽
          </p>

          {product.material && (
            <div style={{
              marginBottom: '30px',
              backgroundColor: '#f9f9f9',
              padding: '15px',
              borderRadius: '8px'
            }}>
              <h3 style={{ marginBottom: '10px' }}>Характеристики:</h3>
              <p><strong>Материал:</strong> {product.material.name}</p>
              <p><strong>Состав:</strong> {product.material.composition}</p>
              <p><strong>Плотность:</strong> {product.material.thickness}</p>
              <p><strong>Производство:</strong> {product.material.production}</p>
            </div>
          )}

          {product.amount && (
            <p style={{ marginBottom: '20px' }}>
              <strong>В наличии:</strong> {product.amount} шт.
            </p>
          )}

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '10px' }}>Размер:</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  style={{
                    padding: '10px 15px',
                    border: '1px solid #ddd',
                    background: 'none',
                    cursor: 'pointer',
                    minWidth: '50px'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            style={{
              padding: '15px 30px',
              background: '#000',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.1rem',
              width: '100%',
              maxWidth: '300px',
              borderRadius: '4px',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.background = '#333'}
            onMouseOut={(e) => e.target.background = '#000'}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
