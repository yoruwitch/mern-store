import { body } from "express-validator";

body('name').isString().notEmpty();
body('price').isFloat().notEmpty().gt(0);
body('name').isString().notEmpty();
