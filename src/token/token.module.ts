import { Module } from '@nestjs/common';
import { TokenService } from './token/service/token.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from './token/schemas/user-token.schema';

@Module({
 imports: [
   MongooseModule.forFeature([{name: 'Token', schema: TokenSchema}])
  ],
 providers: [TokenService],
 exports: [TokenService]
})
export class TokenModule {}
