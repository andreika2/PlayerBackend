import * as mongose from 'mongoose'
import { genderEnum } from '../enums/gender.enums';
import { roleEnum } from '../enums/role.enum';

export const UserSchema = new mongose.Schema({
    email: {type: String, required: true},
    avatarUrl: {type: String, default: null},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true, enum: Object.values(genderEnum)},
    password: {type: String, required: true},
    role: {type: [String], required: true, enum: Object.values(roleEnum)}
});

UserSchema.index({email: 1}, {unique: true});