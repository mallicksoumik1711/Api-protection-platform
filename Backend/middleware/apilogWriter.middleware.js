const ApiLogModel = require("../models/apilog.model");
const getResultType = require("../utils/getResultType");

const apiLogWriter = (req, res, next) => {
    const startTime = Date.now();
    const requestId = "req_" + Math.random().toString(36).substring(2,8);

    // not including /logs
    const path = req.originalUrl;
    if(path.startsWith("/logs")){
        return next();
    }

    res.on("finish", async () => {
        try{
            const responseTime = Date.now() - startTime;
            await ApiLogModel.create({
                method: req.method,
                path: req.path,
                query: req.originalUrl.split("?")[1] || "",
                status: res.statusCode,
                result: getResultType(res.statusCode),
                apiKey: req.headers["x-api-key"] || "",
                ip: req.ip,
                responseTime: responseTime,
                requestId: requestId,
            });
        } catch(e){
            console.log("Log write error: ", e.message);
            console.error(e.message);
        }
    });
    next();
}

module.exports = apiLogWriter;