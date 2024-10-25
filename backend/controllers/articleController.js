const Article = require("../models/article");
const Newsletter = require("../models/newsletter");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});
exports.createArticle = async (req, res, next) => {
  const { title, content, author, category, description, image } = req.body;
  try {
    const newArticle = new Article({
      title,
      content,
      author,
      category,
      description,
      image,
    });

    await newArticle.save();

    // Send email notification to the people who have subscribed to the newsletter

    const subscribers = await Newsletter.find();
    
    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: subscribers.map((sub) => sub.email),
      subject: "New Blog Published!",
      text: `A new blog titled "${title}" has been published. Check it out!`,
      html: `<p>A new article titled <strong>${title}</strong> has been published.</p><strong>${description}</strong>`,
    };

    // Send email notifications
    await transporter.sendMail(mailOptions);

    const articles = await Article.find().sort({ createdAt: -1 });
    res.status(201).json({
      isSuccess: true,
      message: "Article created successfully",
      articles,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllArticles = async (req, res, next) => {
  try {
    const article = await Article.find().sort({ date: -1 });
    res.status(200).json({
      isSuccess: true,
      message: "Articles fetched successfully",
      article,
    });
  } catch (error) {
    next(error);
  }
};
