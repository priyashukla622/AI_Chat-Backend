import SearchHistory  from "../models/historyScheema.js";
const getHistory=async (req, res) => {
    try {
        const userId = req.user.id;
        const userHistory = await SearchHistory.findOne({ userId });

        res.json({ history: userHistory ? userHistory.searches : [] });
    } catch (error) {
        res.status(500).json({ error: error.message || "Server Error" });
    }
};
export default getHistory