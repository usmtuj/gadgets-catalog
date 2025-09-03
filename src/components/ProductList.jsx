import React, { useState, useEffect } from 'react'
import { db } from '../FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'gadgets'))
        const ProductsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProducts(ProductsData)
      } catch (error) {
        console.error('ошибка', error)
      }
    }
    fetchProduct()
  }, [])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  )

  return (
    <div className="Products">
      <h1>Список Электронных Гаджетов</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Поиск Товаров..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="text">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Цена: {product.price}тг.</p>
            </div>
            <button className="add" onClick={() => addToCart(product)}>
              Добавить в Корзину
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
