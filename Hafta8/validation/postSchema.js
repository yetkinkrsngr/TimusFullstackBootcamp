const { checkSchema } = require("express-validator");

const postSchema = checkSchema({
  title: { notEmpty: true },
  author: {
    isLength: {
      options: { min: 5 },
    },
  },
  content: { notEmpty: true },
});


module.exports = { postSchema }