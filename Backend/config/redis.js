const redis = require("redis");
const redisURL = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const client = redis.createClient({
  url: redisURL,
  // socket: {
  //     host: "127.0.0.1",
  //     port: 6379,
  // },
});
client.on("connect", () => {
  console.log("redis connected");
});
client.on("error", (err) => {
  console.log("Redis Client Error", err);
});
(async () => {
  try {
    await client.connect();
  } catch (err) {
    console.log("Redis connection error: ", err);
  }
})();
// client.connect();
module.exports = client;
