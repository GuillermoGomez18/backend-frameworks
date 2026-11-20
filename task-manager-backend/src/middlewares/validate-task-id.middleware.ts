import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error.js";

const OBJECT_ID_PATTERN = /^[a-fA-F0-9]{24}$/;

export const validateTaskId = (
  _req: Request,
  res: Response,
  next: NextFunction,
  value: string,
): void => {
  if (!OBJECT_ID_PATTERN.test(value)) {
    next(
      new AppError("El id de la tarea no es válido.", 400, "INVALID_TASK_ID"),
    );
    return;
  }
  res.locals.taskId = value;
  next();
};
