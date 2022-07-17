export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "db16f826f0mshddeba93718be18dp1acdbcjsn16057dd36621",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  const data = await response.json();
  return data;
};
