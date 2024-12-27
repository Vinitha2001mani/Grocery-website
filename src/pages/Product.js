
import React, { useState, useEffect, useRef } from "react";
import "./Product.css";
import j1 from "./images/j1.jpg"
import j2 from "./images/j2.jpg"
import j3 from "./images/j3.jpg"
import j4 from "./images/j4.jpg"

const ProductSection = () => {
  // State to manage cart items and cart visibility
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Reference to the cart modal to check clicks outside it
  const cartModalRef = useRef(null);
  const cartIconRef = useRef(null);

  // Add a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        // Update quantity and price for the existing product
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1, price: item.price + product.unitPrice }
            : item
        );
      } else {
        // Add a new product to the cart
        return [...prevCart, { ...product, quantity: 1, price: product.unitPrice }];
      }
    });
    
    // Show an alert when the product is added to the cart
    alert(`${product.name} has been added to your cart!`);
  };

  // Remove a product from the cart
  const handleRemoveFromCart = (productName) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1, price: item.price - item.unitPrice }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with zero quantity
    );
  };

  // Calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Sample products data
  const products = [
    { name: "Carrots", category: "Vegetables", unitPrice: 2.99, image: j1 },
    { name: "Capsicum", category: "Vegetables", unitPrice: 3.99, image: j2 },
    { name: "Brinjal", category: "Vegetables", unitPrice: 1.99, image: j3 },
    { name: "Cabbage", category: "Vegetables", unitPrice: 2.49, image: j4 },
  ];
  

  // Close cart if clicked outside the cart modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartModalRef.current && 
        !cartModalRef.current.contains(event.target) && 
        !cartIconRef.current.contains(event.target)
      ) {
        setIsCartOpen(false); // Close cart if clicked outside
      }
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="product-section">
      <h2 className="text-center1">Vegetables</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.unitPrice}/kg</p>
            <div className="product-buttons">
              <button
                className="btn add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button className="btn buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center2">Fruits</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.unitPrice}/kg</p>
            <div className="product-buttons">
              <button
                className="btn add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button className="btn buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center2">Dairy Product</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.unitPrice}/kg</p>
            <div className="product-buttons">
              <button
                className="btn add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button className="btn buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Icon */}
      <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)} ref={cartIconRef}>
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">
          {cart.reduce((count, item) => count + item.quantity, 0)}
        </span>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="cart-modal" ref={cartModalRef}>
          <h3>Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.name} className="cart-item">
                  <p>
                    {item.name} (x{item.quantity}) - ${item.price.toFixed(2)}
                  </p>
                  <div className="cart-item-buttons">
                    <button
                      className="btn remove-btn"
                      onClick={() => handleRemoveFromCart(item.name)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <p className="cart-total">Total: ${calculateTotal()}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProductSection;
