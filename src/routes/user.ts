import { Router } from 'express'
import { check } from 'express-validator'
import { usersDelete, usersGet, usersPost, usersPut } from '../controllers'
import { emailExist, errorValidation, validateJWT } from '../middlewares'

export const userRouter = Router()

userRouter.get('/', usersGet)

userRouter.post(
	'/',
	[
		check('*', 'are required').trim().escape().notEmpty(),
		check('email', 'not an email').isEmail().normalizeEmail(),
		check('password', 'The Password must have at least 8 characters').isLength({
			min: 8,
		}),
		check('email').custom(emailExist),
		errorValidation,
	],
	usersPost
)

userRouter.put(
	'/:id',
	[
		validateJWT,
		check('*', 'are required').trim().escape().notEmpty(),
		check('email', 'not an email').isEmail().normalizeEmail(),
		check('password', 'The Password must have at least 8 characters').isLength({
			min: 8,
		}),
		check('email').custom(emailExist),
		errorValidation,
	],
	usersPut
)

userRouter.delete('/:id', [validateJWT], usersDelete)
