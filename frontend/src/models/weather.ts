export interface WeatherData {
  country: string;
  countryCode: string;
  temp: number;
  weather: string;
  windSpeed: number;
  cod: number;
  error?: Error;
}
