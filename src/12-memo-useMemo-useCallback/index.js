import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../09-useFetch/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}
const Memo = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)
  const addCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])
  // 根据[products]里面的products值判断一下，
  // 因为useMemo 作为一个有着暂存能力的，暂存了上一次的products结果,如果没有改变就不重新调用
  const moreExpensive = useMemo(() => {
    return calculateMostExpensive(products)
  }, [products])
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2>moreExpensive:{moreExpensive}</h2>
      <h1>Cart:{cart}</h1>
      <BigList products={products} addCart={addCart} />
    </>
  )
}

// React.memo check props not change ,then component  will not change
const BigList = React.memo(({ products, addCart }) => {
  useEffect(() => {
    console.count('hello from big list');
  });

  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addCart={addCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addCart }) => {
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  useEffect(() => {
    console.count('hello from product');
  });
  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addCart}>add to cart</button>
    </article>
  )
}
export default Memo
