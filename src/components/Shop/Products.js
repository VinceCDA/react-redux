import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "pl1", price: 6, title: "First Book", description: "The First BOOk" },
  { id: "pl2", price: 8, title: "Second Book", description: "The Second BOOk" },
  { id: "pl3", price: 10, title: "Third Book", description: "The Third BOOk" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
