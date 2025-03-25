export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li>
          {product.name} - {product.price}
        </li>
      ))}
    </ul>
  );
}
