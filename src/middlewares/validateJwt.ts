import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { TokenPayload } from '../interfaces/Token'
import { User } from '../models'

export const validateJWT = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.header('x-token')

	if (!token) {
		return res.status(401).json({
			msg: 'Token not found',
		})
	}

	try {
		const key = process.env.SECRETJWT ? process.env.SECRETJWT : ''
		const { id } = jwt.verify(token, key) as TokenPayload

		const user = await User.findById(id)

		if (!user) {
			return res.status(401).json({
				msg: 'The user does not exist in the database',
			})
		}

		if (user.disabled) {
			return res.status(401).json({
				msg: 'Disabled User',
			})
		}

		req.userId = user.id
		next()
	} catch (error) {
		console.log(error)
		res.status(401).json({
			msg: 'Invalid token',
		})
	}
}
