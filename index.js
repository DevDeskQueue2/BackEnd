const server = require('./server');

const port = process.env.PORT || 4000;

// start watching for connections on the port specified
server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
}) 