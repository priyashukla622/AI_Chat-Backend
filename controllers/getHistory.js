import SearchHistory  from "../models/historyScheema.js";
const getHistory = async (req, res) => {
    try {
        const userId = req.user.id;  
        const userHistory = await SearchHistory.findOne({ userId });

        if (!userHistory) {
            return res.status(404).json({ error: "No history found" });
        }

        res.json({ history: userHistory.chats });
    } catch (error) {
        res.status(500).json({ error: error.message || "Server Error" });
    }
};
export default getHistory;