// const User = require('../models/User');

export const createUser = async (req, res, next) => {
    // [
    //     body('name').notEmpty().withMessage('Name is required'),
    //     body('email').isEmail().withMessage('Invalid email address'),
    // ],
    //     validate,
    try {
        const { name, email } = req.body;
        const user = await User.create(name, email);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

// exports.updateUser = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { name, email } = req.body;
//         const user = await User.update(id, name, email);
//         res.json(user);
//     } catch (err) {
//         next(err);
//     }
// };
//
// exports.patchUser = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { name, email } = req.body;
//         const user = await User.update(id, name || user.name, email || user.email);
//         res.json(user);
//     } catch (err) {
//         next(err);
//     }
// };
//
// exports.getAllUsers = async (req, res, next) => {
//     try {
//         const users = await User.getAll();
//         res.json(users);
//     } catch (err) {
//         next(err);
//     }
// };
//
// exports.getUser = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const user = await User.getById(id);
//         if (!user) {
//             return res.status(404).json({ error: 'User not found' });
//         }
//         res.json(user);
//     } catch (err) {
//         next(err);
//     }
// };
//
// exports.deleteUser = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const user = await User.softDelete(id);
//         res.json(user);
//     } catch (err) {
//         next(err);
//     }
// };