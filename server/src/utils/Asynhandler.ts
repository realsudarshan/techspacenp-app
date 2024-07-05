import { Request, Response, NextFunction } from "express";

export const AsyncHandler = (fn: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
try {
    await fn(req, res, next);
} catch (error : any  ) {
    res.status(error.code || 400).json({
        success: false,
        message : error.message
    })
    
}
};
