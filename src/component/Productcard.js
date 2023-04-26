import './productCard.css';

export default function ProductCard({ productDetails}) {
  const {
    productId,
    productPic,
    productName,
    brand,
    productDescription,
    price,
    rating,
  } = productDetails;
  
console.log(productDetails)
  const handleAddToCart = () => {
    alert(`Product ${productId} - ${productName} of brand ${brand} with price ${price} has been added to the cart. Please proceed to pay!`);
  };


  return (
    <div className="product-card">
      <img src={productPic} alt="Product" className= "productpic"/>
      <h2>{productName}</h2>
      <h3>{brand}</h3>
      <p>{productDescription}</p>
      <p>{price}</p>
      <p>{`Rating: ${rating}`}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}


