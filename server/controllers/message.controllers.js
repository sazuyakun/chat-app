import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        //get message as input from user
        const {message} = req.body;

        //get receiverId 
        const {id: receiverId} =  req.params; //Destructuring... this is the same as writing 'const id = req.params.id'
        //{id; receiverId} is renaming the id as receiverId
        const senderId = req.user._id; //comes from the middleware protectRoute.js

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })
        
        //checking conversation between two users
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        // await conversation.save();
        // await newMessage.save();

        //The next line is a more optimised method for above two comments, they run parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        //SOCKET.IO functionality comes here

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal server error"})
    }
}