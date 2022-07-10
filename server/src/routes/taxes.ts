import { Router, Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import Tax, { TaxType } from '../models/Tax';
import Request from '../types/Request';

const router: Router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const taxes = await Tax.find().select('name price');
    res.json(taxes);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
  }
});

export default router;
