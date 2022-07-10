import { Router, Response } from 'express';
import HttpStatusCodes from 'http-status-codes';
import Gift, { GiftType } from '../models/Gift';
import Request from '../types/Request';

const router: Router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const gifts = await Gift.find().select('name price');
    res.json(gifts);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
  }
});

export default router;
