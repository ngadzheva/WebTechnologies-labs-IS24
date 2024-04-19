import mongoose, { Schema } from "mongoose";

export const MarkSchema = new Schema({
    subject: String,
    mark: {
        type: Number,
        required: true,
        min: 2,
        max: 6
    },
    timestamp: Date,
    teacherId: mongoose.Types.ObjectId
});