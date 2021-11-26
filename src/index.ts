import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import { readdirSync } from 'fs';

import { connectDb } from './db';
import authRoutes from './routes/auth';

config();

const app = express();

connectDb();

app.use(express.json({ limit: '5mb' }));

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`Server running at port ${process.env.PORT}`)
);
