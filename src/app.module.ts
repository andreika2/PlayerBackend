import { Module } from '@nestjs/common';
import { VideoModule } from './video/video.module';
import { from } from 'rxjs';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose'

const enviroment = process.env.NODE_ENV || 'development'

@Module({
  imports: [
    VideoModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${enviroment}`,
      isGlobal: true
    }),
    MongooseModule.forRoot(
      process.env.MONGOOSE_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
