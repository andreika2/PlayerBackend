import { Module } from '@nestjs/common';
import { UserService } from './user/service/user.service';
import { UserController } from './user/controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
