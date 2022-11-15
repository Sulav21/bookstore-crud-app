import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    availability:{
        type:Boolean,
        required:true
    },
})

export default mongoose.model('book',BookSchema)