import express from 'express';
import chalk from 'chalk';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './connectDB/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import messagesRoutes from './routes/messages.routes.js';
import usersRoutes from './routes/users.routes.js';
import { app, server } from './socket/socket.js';

// const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(chalk.hex('#03befc').bold("~ Default API fetched!"));
    res.send('API is working!');
});

app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/users', usersRoutes);

server.listen(PORT, () => {
    console.log(chalk.hex('#00ff00').bold(`<--- SERVER RUNNING AT PORT ${PORT} --->`));
    connectDB();
});