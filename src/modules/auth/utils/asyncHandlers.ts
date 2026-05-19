import { Request, Response, NextFunction } from "express";

// Define a type for your controller functions
type ControllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<any> | any;

export const asyncHandler = (fn: ControllerFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Promise.resolve catches both sync throws and rejected promises
    Promise.resolve(fn(req, res, next)).catch((err) => {
      // Pass the error to Express's central error handler
      next(err); 
    });
  };
};
