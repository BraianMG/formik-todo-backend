import { Schema, model } from 'mongoose'
import { ITodo } from '../interfaces'

const TodoSchema = new Schema<ITodo>({
	title: {
		type: String,
		required: [true, 'The Title is required'],
	},
	description: {
		type: String,
		default: '',
	},
	completed: {
		type: Boolean,
		default: false,
	},
	deleted: {
		type: Boolean,
		default: false,
	},
})

TodoSchema.methods.toJSON = function () {
	const { __v, _id, deleted, ...todo } = this.toObject()
	todo.id = _id

	return todo
}

export const Todo = model('Todo', TodoSchema)
