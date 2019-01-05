export const REGISTER_USER = 'REGISTERUSER';

export const registerAction = (newUser)=>{
    return{
        type:REGISTER_USER,
        data:newUser
    }
}