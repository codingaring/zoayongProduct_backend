import { Request, Response, NextFunction } from 'express';

function asyncHandler(
  handler: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await handler(req, res, next);
    } catch (e: any) {
      next(e);
    }
  };
}

export default asyncHandler;
