const axios = require("axios");
const Info = require("../db/schemas/infoApi.schema");
const { API_KEY } = process.env;

const infoApi = async (req, res) => {
  const name = req.query.name;
  const findCity = await Info.countDocuments();

  if (!findCity) {
    const apiUrl = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`
    );
    const restInfo = await Promise.all(
      apiUrl.data.map(async (restMap) => {
        return {
          id: restMap.id,
          name: restMap.name,
          lat: restMap.coord.lat,
          lon: restMap.coord.lon,
        };
      })
    );

    const infoFromDb = await Info.find();
    if (infoFromDb.length === 0) {
      await Info.create(restInfo);
      console.log(Info);
      res.send("HOLAAAA", Info);
      return Info;
    }
  }
};

const infoDB = async (req, res) => {
  const infoTotal = await infoApi();
  console.log("keeeeee", infoTotal);
  try {
    const dbInfo = await Info.find();
    res.send(dbInfo, "EUUUUUU VOCE");
    return dbInfo;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

//HACER POST

module.exports = { infoApi, infoDB };
