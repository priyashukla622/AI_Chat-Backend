// import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";

// const authMiddleware = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization?.split(" ")[1];
//         if (!token) {
//             return res.status(401).json({ error: "Unauthorized: No token provided" });
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = await User.findById(decoded.id).select("-password");

//         if (!req.user) {
//             return res.status(401).json({ error: "Unauthorized: User not found" });
//         }
//         next();
//     } catch (error) {
//         res.status(401).json({ error: "Unauthorized: Invalid token" });
//     }
// };
// export default authMiddleware;




import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

console.log("AuthMiddleware Loaded");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized: User not found" });
        }
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
};

export default authMiddleware;



