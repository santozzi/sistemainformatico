import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import passportMiddleware from './middlewares/passport';
import passport from 'passport';
import specialRoutes from './routes/special.routes';
import gabineteRoutes from './routes/gabinete.routes';
//inializacion
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);
//routes    
app.get('/', (req, res) => {
     res.send(`The API is at http://192.168.1.117:${app.get('port')}`);    
}
    );
app.use(authRoutes);
app.use(specialRoutes);
app.use(gabineteRoutes);
export default app;