const questionModel = require("../models/Question");

exports.getRandomQuestion = async (req, res) => {
  const docCount = await questionModel.countDocuments({}).exec();

  const randInt = Math.floor(Math.random() * docCount);

  const randQuestion = await questionModel.findOne().skip(randInt).exec();

  res.json(randQuestion);
};

exports.createQuestion = async (req, res) => {
  const { text } = req.body;

  const doc = {
    text: text,
  };

  const mdb = await questionModel.create(doc);
  res.json(mdb);
};

exports.getNumberOfQuestions = async (req, res) => {
  const docCount = await questionModel.countDocuments({}).exec();
  res.json(docCount);
};
