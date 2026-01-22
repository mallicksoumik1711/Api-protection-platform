const mongoose = require("mongoose");

const databaseConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB successfully");
    }
    catch(err){
        console.log("MongoDB connection error: ", err.message);
        process.exit(1);
    }
}

module.exports = databaseConnection;