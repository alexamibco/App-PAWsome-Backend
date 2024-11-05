import express from "express";
import getUsers from './users/routes'
import placeRoutes from './places/routes';
import reviewRoutes from './reviews/routes';
import uploadRoutes from './uploadImages/routes';
import loginRoutes from './auth/routes';
import cors from "cors";

const app = express();

const corsOptions = {
  origin: 'https://app-pawsome-frontend.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(getUsers);
app.use(placeRoutes); 
app.use(reviewRoutes);
app.use(uploadRoutes);
app.use(loginRoutes);

export default app;
