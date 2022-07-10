import { Router, Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import Product, { ProductType } from '../models/Product';
import Request from '../types/Request';

const router: Router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const products = await Product.find().select('name price src type');
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
  }
});

export default router;
