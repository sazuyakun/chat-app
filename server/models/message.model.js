import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true,
    }
}, {timestamps: true}) //timestamps shows createdAt and updatedAt
//frontend has message.createdAt to get time and date

const Message = mongoose.model("Message", messageSchema);

export default Message;