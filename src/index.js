import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';


const startServer = async () => {
    try {
        await initMongoConnection();
        setupServer();
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}

startServer();
