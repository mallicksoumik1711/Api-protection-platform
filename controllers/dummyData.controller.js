const dummyData = (req, res) => {
  const isAuthenticated = req.user;
  // console.log(req.user);

  if (isAuthenticated) {
    res.json({
      message: "This is some protected dummy data",
      timestamp: new Date(),
      user: req.user.email,
    });
  } else {
    res.json({
      message: "This is some dummy data",
      timestamp: new Date(),
    });
  }
};

module.exports = dummyData;
