import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces'

const UserSchema = new Schema<IUser>({
	name: {
		type: String,
		required: [true, 'The Name is required'],
	},
	email: {
		type: String,
		unique: true,
		required: [true, 'The Email is required'],
	},
	password: {
		type: String,
		required: [true, 'The Password is required'],
	},
	role: {
		type: String,
		required: true,
		// TODO: tratar de usar el type UserRoles para 'default' y 'enum'
		default: 'USER_ROLE',
		enum: ['ADMIN_ROLE', 'USER_ROLE'],
	},
	google: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
})

UserSchema.methods.toJSON = function () {
	const { __v, password, _id, ...user } = this.toObject()
	user.id = _id

	return user
}

export const User = model<IUser>('User', UserSchema)
