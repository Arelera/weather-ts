import axios from 'axios';
import { RequestHandler } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const api_url = (location: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.API_KEY}`;

export const getWeather: RequestHandler = (req, res, next) => {
  const { location } = req.query as { location: string };

  if (!location) {
    throw new Error('no location');
  }
  axios
    .get(api_url(location))
    .then((response) => response.data)
    .then(({ name, sys, weather, wind, main, cod }) => {
      const cleanData = {
        country: name,
        countryCode: sys.country,
        temp: main.temp,
        weather: weather[0].main,
        windSpeed: wind.speed,
        cod,
      };
      res.send(cleanData);
    })
    .catch((error) => {
      next(error);
    });
};
