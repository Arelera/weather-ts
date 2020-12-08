import { Router } from 'express';
import { getWeather } from '../controllers/weather';
const router = Router();

router.get('/weather', getWeather);

export default router;
