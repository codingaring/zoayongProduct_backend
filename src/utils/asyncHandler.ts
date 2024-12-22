import { type Request, type Response } from 'express';

function asyncHandler(handler: (req: Request, res: Response) => Promise<void>) {
  return async function (req: Request, res: Response) {
    try {
      await handler(req, res);
    } catch (e: any) {
      if (e.name === 'ValidationError') {
        res.status(400).send({ message: e.message });
      } else if (e.name === 'CastError') {
        res.status(404).send({ message: 'Cannot find given id.' });
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}

export default asyncHandler;
