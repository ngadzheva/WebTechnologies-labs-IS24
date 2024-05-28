import { Document, model, Schema } from "mongoose";
import IUser from "../interfaces/user";

export interface UserDocument extends IUser, Document {}

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [3, 'Username must be at least 3 symbols'],
        maxLength: [20, 'Username must be less than 20 symbols']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password must be at least 6 symbols']
    },
    email: String
});

export const User = model('User', UserSchema);