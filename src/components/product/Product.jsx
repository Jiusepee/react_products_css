import "./Product.css";

const Product = (props) => {
  console.log(props.productItems, "vaikinis elementas");

  return (
    <div className="products_list">
      {props.productItems.map((productItems, index) => (
        <div key={index} className="one_item">
          <h3>{productItems.name}</h3>
          <img src={productItems.imageUrl} alt=""></img>
          <p>{productItems.description}</p>
          <div className="bottomTag">
            <p>Price: {productItems.price} Eur</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
