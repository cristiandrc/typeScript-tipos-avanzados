//los enum es buena practica nombrarlos en mayusculas
enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner'
}

type User = {
  username: string,
  role: ROLES
}

const crisUser: User = {
  username:'cristian',
  role: ROLES.ADMIN
}
