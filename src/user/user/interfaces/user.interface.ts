import { Document } from 'mongoose'

export interface IUser extends Document {
    status: string;
    readonly email: string,
    readonly avatarUrl: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly gender: string,
    readonly password: string,
    readonly role: Array<string>
}