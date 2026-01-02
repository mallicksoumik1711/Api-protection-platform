const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return  res.status(401).send({message: "Access denied. No token provided."});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(401).send({message: "Invalid token or expired token."});
    }
}

module.exports = authMiddleware;