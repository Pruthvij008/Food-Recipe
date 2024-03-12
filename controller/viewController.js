// const axios = require("axios");

// exports.getRecipe = async (req, res) => {
//   const result = await axios.get(
//     `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
//   );
//   console.log(result.data);
//   res.status(200).json({
//     status: "success",
//     data: {
//       result: result.data,
//     },
//   });
// };
// viewController.js

const axios = require("axios");

exports.search = (req, res) => {
  res.status(200).render("search");
};
// exports.getRecipe = async (req, res) => {
//   try {
//     const result = await axios.get(
//       `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
//     );

//     console.log(result.data);

//     res.status(200).json({
//       status: "success",
//       data: {
//         result: result.data.hits,
//       },
//     });
//   } catch (error) {
//     console.error("Error fetching recipes:", error);
//     res.status(500).json({
//       status: "error",
//       message: "An error occurred while fetching recipes.",
//     });
//   }
// };
// viewController.js

exports.login = async (req, res) => {
  res.status(200).render("login");
};
exports.getRecipe = async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    );

    // Render the 'recipe' view and pass the search results to it
    res.render("recipe", { results: result.data.hits });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching recipes.",
    });
  }
};
