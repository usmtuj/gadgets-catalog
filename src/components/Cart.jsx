import React from 'react'
import '../Cart.css'

const Cart = ({ cart, toggleCart, addToCart, decreaseQuantity }) => {
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <button onClick={toggleCart}>Закрыть</button>
        <h2>Корзина</h2>

        {cart.length === 0 ? (
          <p>Пусто</p>
        ) : (
          <ul>
            {cart.map((p) => (
              <li key={p.id}>
                <img src={p.image} alt={p.name} width="50" />
                <b>{p.name}</b> — {p.price}тг × {p.quantity} ={' '}
                {p.price * p.quantity}тг
                <button onClick={() => decreaseQuantity(p.id)}>-</button>
                <button onClick={() => addToCart(p)}>+</button>
              </li>
            ))}
          </ul>
        )}

        <h3>Итого: {total}тг</h3>
      </div>
    </div>
  )
}

export default Cart
