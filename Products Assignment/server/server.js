import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import productRouter from './routes/products.route.js';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/v1/products', productRouter);

export default app;
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});