import { Document } from 'mongoose'

export interface IVideo extends Document {
    readonly videoName: string,
    readonly videoType: string,
    readonly urlServerAddress: string
}