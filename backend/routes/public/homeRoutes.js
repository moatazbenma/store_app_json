import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Simple Store</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>🛍️ Welcome to Simple Store</h1>
        <p>Try visiting:</p>
        <ul style="list-style:none;">
          <li><a href="/product/1">/product/1</a> → HTML product page</li>
          <li><a href="/api/product/1">/api/product/1</a> → JSON product API</li>
        </ul>
      </body>
    </html>
  `);
});

export default router;
