import express from 'express';
import { readJSON } from '../../utils/fileHelper.js';

const router = express.Router();

router.get('/product/:id', (req, res) => {
  const products = readJSON('products.json');
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    res.status(404).send('<h1>Product not found</h1>');
  } else {
    res.send(`
      <html>
        <head><title>${product.name}</title></head>
        <body>
          <h1>${product.name}</h1>
          <p>Price: $${product.price}</p>
        </body>
      </html>
    `);
  }
});

export default router;
