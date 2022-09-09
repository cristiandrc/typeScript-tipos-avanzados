//los enum es buena practica nombrarlos en mayusculas
export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner'
}

export type User = {
  username: string,
  role: ROLES
}

export const crisUser: User = {
  username:'cristian',
  role: ROLES.ADMIN
}
