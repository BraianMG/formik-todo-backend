import bcryptjs from 'bcryptjs'
import { Request, Response } from 'express'
import { generateJWT } from '../helpers'
import { IUser, TokenPayload } from '../interfaces'
import { User } from '../models'

export const auth = async (req: Request, res: Response) => {
	const { email, password }: IUser = req.body

	try {
		const user = await User.findOne({ email })

		if (!user) {
			return res.status(400).json({
				msg: 'The Email does not exist',
			})
		}

		if (user.disabled) {
			return res.status(403).json({
				msg: 'Disabled User',
			})
		}

		const validPassword = bcryptjs.compareSync(password, user.password)

		if (!validPassword) {
			return res.status(400).json({
				msg: 'Password is incorrect',
			})
		}

		const payload: TokenPayload = {
			id: user.id,
			email: user.email,
			name: user.name,
			role: user.role,
			google: user.google,
		}

		const token = await generateJWT(payload)

		res.status(200).json({
			user,
			token,
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Something happened with the backend',
		})
	}
}
