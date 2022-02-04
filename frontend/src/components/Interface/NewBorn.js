import "./NewBorn.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Interface/Product";

// //Actions
// import { getProducts as listProducts } from "./components/redux/productActions";

const NewBorn = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  
  // Para mostrar os produtos
  /*useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
*/
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imgUrl={product.imgUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewBorn;