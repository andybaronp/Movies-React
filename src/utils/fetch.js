const API_URL = "https://api.themoviedb.org/3";
export const getData = (path) => {
  return fetch(`${API_URL}${path}`, {
    headers: {
      Authorization:
        " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODFkMWVkZjM1MWQxZTg3MWVhZjFjNGUzODdmODIwZCIsInN1YiI6IjYxY2E0OTI3ODFhN2ZjMDA5MTcxNTFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.utycZEwuqQE6EzmifvxhCw2ZPAwfcPz5e8Bm9zU1Y9A",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((res) => res.json());
};
