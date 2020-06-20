import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUserToken } from '../interfaces/user-token.interfaces';
import { Model } from 'mongoose';
import { CreateUserTokenDto } from '../dto/create-user-token.dto';

@Injectable()
export class TokenService {
    constructor(@InjectModel('Token') private readonly tokenModule: Model<IUserToken>){}

    async create(createUserTokenDto: CreateUserTokenDto): Promise<IUserToken> {
        const userToken = new this.tokenModule(createUserTokenDto);
        return await userToken.save();
    }

    async delete(uId: string, token: string): Promise<{ok?: number, n?: number}> {
        return await this.tokenModule.deleteOne({ uId, token });
    }

    async deleteAll(uId: string):  Promise<{ok?: number, n?: number}> {
        return await this.tokenModule.deleteMany({ uId });
    }

    async exists(uId: string, token: string): Promise<boolean> {
        return await this.tokenModule.exists({ uId, token });
    }
}
