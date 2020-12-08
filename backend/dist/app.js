"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var cors_1 = __importDefault(require("cors"));
var weather_1 = __importDefault(require("./routes/weather"));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(weather_1.default);
app.use(function (error, req, res, next) {
    if (error.message) {
        res.status(404).json({ error: 'Please provide a valid location.' });
    }
    else {
        res.status(500).send({ error: 'Internal server error' });
    }
});
var PORT = 3001;
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
