const products = [
  { id: '1', name: 'Produit', price: 19.99 },
];

const listProducts = () => products;

const createProduct = ({ name, price }) => {
  const newProduct = { id: String(products.length + 1), name, price };
  products.push(newProduct);
  return newProduct;
};

const getProduct = (id) => products.find((product) => product.id === id);

const updateProduct = (id, payload) => {
  const product = getProduct(id);
  if (!product) {
    return null;
  }
  Object.assign(product, payload);
  return product;
};

const deleteProduct = (id) => {
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return null;
  }
  return products.splice(index, 1)[0];
};

module.exports = {
  listProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
