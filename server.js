import express from 'express';
import qr from 'qr-image';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files (e.g., index.html, styles, etc.)
app.use(express.static(path.join(process.cwd(), 'public')));

// API to generate QR code
app.get('/generate', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('URL is required');
  }

  const qrCode = qr.image(url, { type: 'png' });
  res.type('png');
  qrCode.pipe(res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
