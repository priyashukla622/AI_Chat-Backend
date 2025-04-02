import SearchHistory from "../models/historyScheema.js";

// const history = async (req, res) => {
//     try {
//         console.log("User Data:", req.user); 
//         if (!req.user) {
//             return res.status(401).json({ error: "Unauthorized: User not found" });
//         }

//         const { query } = req.body;
//         const userId = req.user.id;  

//         let userHistory = await SearchHistory.findOne({ userId });

//         if (!userHistory) {
//             userHistory = new SearchHistory({ userId, searches: [] });
//         }

//         if (!userHistory.searches.includes(query)) {
//             userHistory.searches.push(query);
//             await userHistory.save();
//         }

//         res.json({ message: "History saved successfully", history: userHistory.searches });

//     } catch (error) {
//         res.status(500).json({ error: error.message || "Server Error" });
//     }
// };
// export default history;





// const history = async (req, res) => {
//     console.log("Request Headers:", req.headers); 

//     try {
//         if (!req.user) {
//             return res.status(401).json({ error: "Unauthorized: User not found" });
//         }

//         const { query } = req.body;
//         const userId = req.user.id;

//         let userHistory = await SearchHistory.findOne({ userId });

//         if (!userHistory) {
//             userHistory = new SearchHistory({ userId, searches: [] });
//         }

//         if (!userHistory.searches.includes(query)) {
//             userHistory.searches.push(query);
//             await userHistory.save();
//         }

//         res.json({ message: "History saved successfully", history: userHistory.searches });

//     } catch (error) {
//         res.status(500).json({ error: error.message || "Server Error" });
//     }
// };
// export default history;




const history = async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Debugging ke liye

        const { query } = req.body;
        const userId = req.user.id;  

        if (!query) {
            return res.status(400).json({ error: "Query is required" });
        }

        let userHistory = await SearchHistory.findOne({ userId });

        if (!userHistory) {
            userHistory = new SearchHistory({ userId, searches: [] });
        }

        if (!userHistory.searches.includes(query)) {
            userHistory.searches.push(query);
            await userHistory.save();
        }
        res.json({ message: "History saved successfully", history: userHistory.searches });
    } catch (error) {
        res.status(500).json({ error: error.message || "Server Error" });
    }
};
export default history;