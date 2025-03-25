const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price}€
        </li>
      ))}
    </ul>
  );
};

// Käyttö:
const products = [
  { id: 1, name: "Tietokone", price: 999 },
  { id: 2, name: "Hiiri", price: 50 },
  { id: 3, name: "Näyttö", price: 200 },
];

<ProductList products={products} />;
