import './App.css';
import ProductCard from './component/Productcard';

const productDetails = [
  {
    productId: '1',
    productPic: 'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg',
    productName: 'Product 1',
    brand: 'Brand 1',
    productDescription: 'This is product 1',
    price: '$7',
    rating: 4,
  },
  {
    productId: '2',
    productPic: 'https://5.imimg.com/data5/MT/MB/EO/SELLER-14290347/men-555-black-fashion-lace-up-shoes-500x500.jpg',
    productName: 'Product 2',
    brand: 'Brand 2',
    productDescription: 'This is product 2',
    price: '$5',
    rating: 3.5,
  },
  {
    productId: '3',
    productPic: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png',
    productName: 'Product 3',
    brand: 'Brand 3',
    productDescription: 'This is product 3',
    price: '$10',
    rating: 4.5,
  },
  {
    productId: '4',
    productPic: 'https://assets.ajio.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a2a6a/-473Wx593H-469034008-black-MODEL.jpg',
    productName: 'Product 4',
    brand: 'Brand 4',
    productDescription: 'This is product 4',
    price: '$25',
    rating: 4,
  },
  {
    productId: '5',
    productPic: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29abad8d7ae64654b001adb90136819e_9366/RUNMAGICA_SHOES_Blue_EY2972_01_standard.jpg',
    productName: 'Product 5',
    brand: 'Brand 5',
    productDescription: 'This is product 5',
    price: '$9',
    rating: 5,
  },
];

function App() {
  return (
    <div className="product-container">
      {productDetails.map((productDetail) => (
        <ProductCard key={productDetail.productId} productDetails={productDetail} />
      ))}
    </div>
  );
}

export default App;
