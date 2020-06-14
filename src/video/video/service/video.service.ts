import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IVideo } from '../interfaces/video.interface';
import { Model } from 'mongoose';
import * as _ from 'lodash'

import { CreateVideoDto } from "../dto/create-video.dto";

@Injectable()
export class VideoService {
    constructor(@InjectModel('Video') private readonly videoModule: Model<IVideo>) {}

    async create(createVideoDto: CreateVideoDto): Promise<IVideo> {
        const createdVideo = new this.videoModule(createVideoDto);
        return await createdVideo.save();
    }

    async findVideoById(id: string): Promise<IVideo> {
        return await this.videoModule.findById(id).exec();
    }
}
