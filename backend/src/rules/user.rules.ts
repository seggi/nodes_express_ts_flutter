import bcrypt from 'bcrypt';
import { check } from 'express-validator/check';
import { User } from '../models/user.model';



export const userRules = {
    forRegister: [
        check('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => User.findAll({ where: { email }}).then(u => !u)).withMessage('Email exists'),
        
        check('password')
            .isLength({ min: 8 }).withMessage('Invalid password'),
        
        check('confirmPassword')
            .custom((confirmPassword, { req }) => req.body.password === confirmPassword).withMessage('Password are different')

    ],

    forLogin: [
        
        check('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => User.findOne({ where: { email} }).then(u => !!u)).withMessage('Invalid email or password'),

        check('password')
            .custom(async (password, { req }) => {
            const user = await User.findOne({ where: { email: req.body.email } });
                return await bcrypt.compare(password, user!!.password);

            }).withMessage('Invalid email or password'),
        
    ]
}