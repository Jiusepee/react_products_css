// stilius .css
import "./ProductList.css";
// duomenys
import data from "../../data/data.js";
// react komponentas
import Product from "../product/Product.jsx";

const ProductList = () => {
  console.log(data, "tevinis elementas");
  return(
      <div className="container">
         <Product productItems={data}/>
      </div>
   ) 
};

export default ProductList;
