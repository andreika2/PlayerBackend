import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth/controller/auth.controller';
import { TokenModule } from 'src/token/token.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { MailModule } from 'src/mail/mail.module';

const enviroment = process.env.NODE_ENV || 'development'

@Module({
  imports: [
    UserModule,
    TokenModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${enviroment}`,
      isGlobal: true
    }),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' }
    }),
    MailModule
  ],
  providers: [
    AuthService, 
    JwtStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
