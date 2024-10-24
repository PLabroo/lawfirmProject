const Article = require("../models/article");
exports.createArticle = async (req, res, next) => {
  try {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      category: req.body.category,
      description: req.body.description,
      image:req.body.image
    });

    await newArticle.save();
    const articles = await Article.find().sort({ createdAt: -1 }); 
    res
      .status(201)
      .json({
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
