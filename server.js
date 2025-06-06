const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const port = process.env.PORT || 8969;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


