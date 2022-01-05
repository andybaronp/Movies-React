const API_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.REACT_APP_API_KEY;
export const getData = (path) => {
  return fetch(`${API_URL}${path}`, {
    headers: {
      Authorization: ` Bearer ${TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((res) => res.json());
};
