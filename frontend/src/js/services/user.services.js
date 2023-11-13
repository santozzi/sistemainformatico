import {signUp,signin} from '../models/user.model.js';

export async function signUpUser(email,password){
    return await signUp({
        email: email,
        password: password
    });
}
export async function signInUser(email,password){
    return await signin({
        email: email,
        password: password
    });
}