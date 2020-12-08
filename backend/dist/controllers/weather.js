"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeather = void 0;
var axios_1 = __importDefault(require("axios"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var api_url = function (location) {
    return "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=" + process.env.API_KEY;
};
var getWeather = function (req, res, next) {
    var location = req.query.location;
    if (!location) {
        throw new Error('no location');
    }
    axios_1.default
        .get(api_url(location))
        .then(function (response) { return response.data; })
        .then(function (_a) {
        var name = _a.name, sys = _a.sys, weather = _a.weather, wind = _a.wind, main = _a.main, cod = _a.cod;
        var cleanData = {
            country: name,
            countryCode: sys.country,
            temp: main.temp,
            weather: weather[0].main,
            windSpeed: wind.speed,
            cod: cod,
        };
        res.send(cleanData);
    })
        .catch(function (error) {
        next(error);
    });
};
exports.getWeather = getWeather;
