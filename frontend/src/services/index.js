import axios from "axios";

export const getGamesAll = async () => {
  try {
    const result = await axios({
      method: "GET",
      url: "http://localhost:8000/api/games",
      //process.env.REACT_APP_REST + "/games",
    });
    return {
      response: result,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error: error,
    };
  }
};
