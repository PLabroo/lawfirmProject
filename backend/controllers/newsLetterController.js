const NewsLetter = require("../models/newsletter");
const { BadRequestError } = require("../middleware/errorTypes");
exports.subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;
    const newSubscription = new NewsLetter({
      email,
    });

    const findEmail = await NewsLetter.findOne({ email });
    if (findEmail) {
      throw new BadRequestError("User already subscribed");
    }

    await newSubscription.save();
    res.status(201).json({
      isSuccess: true,
      message: "Newsletter subscribed successfully",
    });
  } catch (error) {
    next(error);
  }
};
