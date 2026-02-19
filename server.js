const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Healthcheck endpoint
app.get('/healthcheck', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Healthcheck endpoint available at http://localhost:${PORT}/healthcheck`);
});
