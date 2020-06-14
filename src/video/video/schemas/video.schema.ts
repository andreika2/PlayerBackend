import * as mongoose from "mongoose";
import { videoTypesEnum } from "../enums/video-types.enums";

export const VideoSchema = new mongoose.Schema({
    videoName : {type: String, required: true},
    videoType: {type: String, required: true, enum: Object.values(videoTypesEnum)},
    urlServerAddress: {type: String, required: true}
});

VideoSchema.index({urlServerAddress: 1}, {unique: true});