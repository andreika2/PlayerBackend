import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token/service/token.service';
import { CreateVideoDto } from 'src/video/video/dto/create-video.dto';
import { SignOptions } from 'jsonwebtoken';
import { CreateUserTokenDto } from 'src/token/token/dto/create-user-token.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly tokenService: TokenService
    ){}

    signUp(createUserDto: CreateVideoDto) {

    }

    signIn(email, password) {

    }

    private async generateToken(data, options?: SignOptions): Promise<string> {
        return this.jwtService.sign(data, options);
    }

    private async verifyToken(token): Promise<any> {
        try {
            const data = this.jwtService.verify(token);
            const tokenExists = await this.tokenService.exists(data._id, token);
            if (tokenExists) {
                return data;
            }
            throw new UnauthorizedException();
        } catch {
            throw new UnauthorizedException();
        }
    }

    private async saveToken(createUserDto: CreateUserTokenDto) {
        const userToken = await this.tokenService.create(createUserDto);
        return userToken;
    }
}
