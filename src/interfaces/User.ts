export interface IUser {
  name: string
  email: string
  password: string
  role: UserRoles
  google: boolean
  disabled: boolean
}

export type UserRoles = 'ADMIN_ROLE' | 'USER_ROLE'
