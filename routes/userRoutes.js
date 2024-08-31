import express from 'express';
import handleValidation from "../middlewares/request.validate.js";
import { userValidate } from "../validators/user.validator.js";
import { createUser } from '../controllers/userController.js';
// const userController = require();

// const validate = require('../middlewares/validator');
// const { body, param } = require('express-validator');

const router = express.Router();

router.post('/', handleValidation(userValidate), createUser);

// router.put(
//     '/:id',
//     [
//         param('id').isInt().withMessage('Invalid user ID'),
//         body('name').notEmpty().withMessage('Name is required'),
//         body('email').isEmail().withMessage('Invalid email address'),
//     ],
//     validate,
//     userController.updateUser
// );
//
// router.patch(
//     '/:id',
//     [param('id').isInt().withMessage('Invalid user ID')],
//     validate,
//     userController.patchUser
// );
//
// router.get('/', userController.getAllUsers);
//
// router.get(
//     '/:id',
//     [param('id').isInt().withMessage('Invalid user ID')],
//     validate,
//     userController.getUser
// );
//
// router.delete(
//     '/:id',
//     [param('id').isInt().withMessage('Invalid user ID')],
//     validate,
//     userController.deleteUser
// );

export default router;