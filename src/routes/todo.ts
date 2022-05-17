import { Router } from 'express'
import { check } from 'express-validator'
import { todosDelete, todosPost, todosPut, todosGet } from '../controllers'
import { errorValidation } from '../middlewares'

export const todoRouter = Router()

todoRouter.get('/', [], todosGet)

todoRouter.post(
	'/',
	[
		check('title', 'The Title is required').trim().escape().notEmpty(),
		errorValidation,
	],
	todosPost
)

todoRouter.put('/:id', [], todosPut)

todoRouter.delete('/:id', [], todosDelete)
