import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { VideoService } from './video/service/video.service';
import { VideoController } from './video/controller/video.controller';
import { VideoSchema } from './video/schemas/video.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Video', schema: VideoSchema}])],
  providers: [VideoService],
  controllers: [VideoController],
})
export class VideoModule {}
