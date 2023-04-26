import './productCard.css';

export default function ProductCard({ productDetails, addToCart }) {
  const {
    productId,
    productPic,
    productName,
    Brand,
    productDescription,
    Price,
    Rating,
  } = productDetails;

  const handleAddToCart = () => {
    alert(`Product ${productId} - ${productName} of brand ${Brand} with price ${Price} has been added to the cart. Please proceed to pay!`);
  };


  return (
    <div className="product-card">
      <img src={productPic} alt="Product" className= "productpic"/>
      <h2>{productName}</h2>
      <h3>{Brand}</h3>
      <p>{productDescription}</p>
      <p>{Price}</p>
      <p>{`Rating: ${Rating}`}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}


