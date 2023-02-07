const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`Starting server on port: ${port}`);
});
