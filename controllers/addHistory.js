// import SearchHistory  from "../models/historyScheema.js";

// const history = async (req, res) => {
//   try {
//     console.log("Request Body:", req.body);

//     const { chats, title } = req.body;
//     const userId = req.user.id;

//     if (!chats || !Array.isArray(chats) || chats.length === 0) {
//       return res.status(400).json({ error: "Chats array is required" });
//     }
//     const formattedChats = [];
//     chats.forEach((chat) => {
//       if (chat.text) {
//         formattedChats.push({ text: chat.text });
//       }
//       if (chat.answer) {
//         formattedChats.push({ answer: chat.answer });
//       }
//     });
//     const newHistory = new SearchHistory({
//       userId,
//       title,
//       chats: formattedChats,
//     });

//     await newHistory.save();

//     res.json({ message: "History saved successfully", history: newHistory.chats });

//   } catch (error) {
//     res.status(500).json({ error: error.message || "Server Error" });
//   }
// };
// export default history;







import SearchHistory from "../models/historyScheema.js";

const history = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { chats, title } = req.body;
    const userId = req.user.id;

    if (!chats || !Array.isArray(chats) || chats.length === 0) {
      return res.status(400).json({ success: false, error: "Chats array is required" });
    }

    const formattedChats = [];
    chats.forEach((chat) => {
      if (chat.text) formattedChats.push({ text: chat.text });
      if (chat.answer) formattedChats.push({ answer: chat.answer });
    });

    const newHistory = new SearchHistory({
      userId,
      title,
      chats: formattedChats,
    });

    await newHistory.save();

    res.json({
      success: true,
      message: "History saved successfully",
      history: newHistory
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message || "Server Error" });
  }
};

export default history;
