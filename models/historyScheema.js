import mongoose from "mongoose";
const ChatSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  }, 
  chats: [
    {
      text: { type: String },
      answer: { type: String },
      timestamp: { 
        type: Date, 
        default: Date.now 
      }
    }
  ]
});
const SearchHistory=mongoose.model("Chat", ChatSchema);
export default SearchHistory;