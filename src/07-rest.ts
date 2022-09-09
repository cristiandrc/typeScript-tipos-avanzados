import {User, ROLES} from './01-enum';



const currentUser = {
  username: 'David',
  role: ROLES.USER
}

export const checkAdminRole = () =>{
  if(currentUser.role === ROLES.ADMIN){
    return true
  }
  return false
}

console.log(checkAdminRole())
checkAdminRole()


export const checkRole = (...roles: string[]) => {
  if(roles.includes(currentUser.role)){
    return true
  }
  return false
}


console.log('checkRole', checkRole(ROLES.OWNER,ROLES.ADMIN))
