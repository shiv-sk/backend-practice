const mongoose = require('mongoose');
const mongooseaggrigate = require('mongoose-aggregate-paginate-v2');

const VideoSchema = new mongoose.Schema({
    videofile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    view:{
        type:Number,
        default:0
    },
    ispublished:{
        type:Boolean,
        defaukt:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

VideoSchema.plugin(mongooseaggrigate)

const Video = mongoose.model('Video',VideoSchema);
module.exports = Video