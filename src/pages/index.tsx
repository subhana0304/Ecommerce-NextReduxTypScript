import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { addToCart } from '../features/cart/cartSlice';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import InteractiveVideoPlayer from '@/components/InteractiveVideoPlayer';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  video: string; // Add video property
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        // Assuming the API returns a video URL for each product
        const productsWithVideo = data.map((product: Product) => ({
          ...product,
          video: `https://somevideoapi.com/${product.id}`, // Replace with actual video URL logic
        }));
        setProducts(productsWithVideo);
      });
  }, []);

  const handleAddToCart = (product: Product) => {
    const cartItem = { ...product, quantity: 1 }; // Add a quantity field
    dispatch(addToCart(cartItem));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className={styles.container}>
      <h1 className='text-center'>Welcome to the  E-commerce Website</h1>
      <InteractiveVideoPlayer />
      <h1 className='text-center'>Product Listing</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
  
            {/* Add Video Section */}
            <video width="200" controls>
              <source src={product.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
  
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button className={styles.button}><Link href={'/cart'}>See Cart</Link></button>
    </div>
  );
  
}
