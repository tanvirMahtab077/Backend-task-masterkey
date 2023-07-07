const showModel = require("../model/Show");

// title,description,runTime,
exports.addShow = async (req, res, next) => {
  const { title, description, runTime, category,releaseDate, actorIds, producerIds, directorIds } =
    req.body;
  try {
    await showModel.create({
      title,
      description,
      runTime,
      category,
      releaseDate,
      details:{
        actors: actorIds,
        producers: producerIds,
        directors: directorIds,
      }
    });
    res.status(200).json({ message: "Added successfully" });
  } catch (err) {
    console.error(err);
  }
};

