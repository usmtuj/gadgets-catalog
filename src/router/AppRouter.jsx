import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import ProductList from '../components/ProductList'
import Contacts from '../components/Contacts'
import Cart from '../components/Cart'

const AppRouter = () => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id)
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    )
  }

  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/products">Продукты</Link>
        <Link to="/contacts">Контакты</Link>
        <button className="cart-btn" onClick={toggleCart}>
          Корзина ({cart.length})
        </button>
      </nav>
      {isCartOpen && (
        <Cart
          cart={cart}
          toggleCart={toggleCart}
          addToCart={addToCart}
          decreaseQuantity={decreaseQuantity}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductList addToCart={addToCart} />}
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
