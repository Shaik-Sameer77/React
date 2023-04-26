import './App.css';
import ProductCard from './component/Productcard';

const Product1 = {
  productId: '1',
  productPic: 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg',
  productName: 'Product 1',
  Brand: 'Brand 1',
  productDescription: 'This is product 1',
  Price: '$7',
  Rating: 4,
};

const Product2 = {
  productId: '2',
  productPic: 'https://5.imimg.com/data5/MT/MB/EO/SELLER-14290347/men-555-black-fashion-lace-up-shoes-500x500.jpg',
  productName: 'Product 2',
  Brand: 'Brand 2',
  productDescription: 'This is product 2',
  Price: '$5',
  Rating: 3.5,
};

const Product3 = {
  productId: '3',
  productPic: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png',
  productName: 'Product 3',
  Brand: 'Brand 3',
  productDescription: 'This is product 3',
  Price: '$10',
  Rating: 4.5,
};

const Product4 = {
  productId: '4',
  productPic: 'https://assets.ajio.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a2a6a/-473Wx593H-469034008-black-MODEL.jpg',
  productName: 'Product 4',
  Brand: 'Brand 4',
  productDescription: 'This is product 4',
  Price: '$25',
  Rating: 4,
};

const Product5 = {
  productId: '5',
  productPic: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29abad8d7ae64654b001adb90136819e_9366/RUNMAGICA_SHOES_Blue_EY2972_01_standard.jpg',
  productName: 'Product 5',
  Brand: 'Brand 5',
  productDescription: 'This is product 5',
  Price: '$9',
  Rating: 5,
};

function App() {
  return (
    <div className="product-container">
      <div className="product-row">
        <ProductCard productDetails={Product1} />
        <ProductCard productDetails={Product2} />
        <ProductCard productDetails={Product3} />
      </div>
      <div className="product-row">
        <ProductCard productDetails={Product4} />
        <ProductCard productDetails={Product5} />
      </div>
    </div>
  );
}

export default App;

