import {model, Schema, Document}from 'mongoose';
import bcrypt from 'bcrypt';
export interface  IUser extends Document{
    email:String;
    password:String;
    comparePassword: (password:string)=>Promise<boolean>
}
const userSchema = new Schema({
      email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim:true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre<IUser>('save', async function(next){
    const user = this;
    if(!user.isModified('password'))
      return next();
    const salt = await  bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password.toString(), salt);
    user.password = hash;
    next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean>{
    return await bcrypt.compare(password, this.password);
};

export default model<IUser>('User', userSchema);


 