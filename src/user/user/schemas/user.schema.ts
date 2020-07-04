import * as mongose from 'mongoose'
import { genderEnum } from '../enums/gender.enums';
import { roleEnum } from '../enums/role.enum';
import { statusEnum } from '../enums/status.enums';

export const UserSchema = new mongose.Schema({
    email: {type: String, required: true},
    avatarUrl: {type: String, default: null},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true, enum: Object.values(genderEnum)},
    password: {type: String, required: true},
    role: {type: [String], required: true, enum: Object.values(roleEnum)},
    status: { type: String, enum: Object.values(statusEnum), default: statusEnum.pending }
});

UserSchema.index({email: 1}, {unique: true});