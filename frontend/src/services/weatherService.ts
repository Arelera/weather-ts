const getBaseUrl = (location: string) =>
  `http://localhost:3001/weather?location=${location}`;

const getWeather = (location: string) =>
  fetch(getBaseUrl(location)).then((res) => res.json());

const weatherService = { getWeather };
export default weatherService;
