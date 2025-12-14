import ProductDetails from "./_components/ProductDetails";
import ProductImage from "./_components/ProductImage";
import ProductInfo from "./_components/ProductInfo";



const ProductDetailsPage = () => {




  return (
    <div className="container">
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProductImage  />
            <ProductDetails  />
            <ProductInfo  />

          </div>
       

    </div>
  );
};

export default ProductDetailsPage;
