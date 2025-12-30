const dummyData = (req, res) => {
  res.json({
    message: "This is some dummy data",
    timestamp: new Date(),
  });
};

module.exports = dummyData;
