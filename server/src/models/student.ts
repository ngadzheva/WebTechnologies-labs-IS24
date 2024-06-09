import mongoose, { Document, model, Schema } from "mongoose";
import { MarkSchema } from "./mark";
import IStudent from "../../../shared/interfaces/student";

export interface StudentDocument extends IStudent, Document {}

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minLength: [3, 'First name must be at least 3 symbols'],
        maxLength: [20, 'First name must be less than 20 symbols']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minLength: [3, 'Last name must be at least 3 symbols'],
        maxLength: [20, 'Last name must be less than 20 symbols']
    },
    fn: {
        type: Number,
        required: [true, 'FN is required field'],
        min: [70000, 'FN must be greater or equal to 70000'],
        max: [79999, 'FN must be less than 80000']
    },
    mark: [MarkSchema],
    grade: {
        type: Number,
        min: [1, 'Grade must be greater than or equal to 1'],
        max: [4, 'Grade must be less than 5']
    },
    specialty: String,
    userId: mongoose.Types.ObjectId
});

export const Student = model('Student', StudentSchema);