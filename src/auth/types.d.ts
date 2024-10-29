import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // O especifica el tipo que necesites
    }
  }
}
