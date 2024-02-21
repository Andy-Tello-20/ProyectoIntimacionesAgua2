import http from 'http';

import app from './app.js';
import { init as initMongoDB } from './db/mongodb.js';
import { socketServer } from './socket.js'


await initMongoDB();

const server = http.createServer(app);
const PORT =process.env.PORT || 8080;

socketServer(server)

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`);
});
