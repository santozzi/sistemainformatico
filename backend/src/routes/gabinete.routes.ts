import {Router}  from 'express';

const router = Router();
import {CrearGabinite, getGabinete} from '../controllers/gabinete.controller';

router.post('/nuevogab',CrearGabinite);
router.get('/gabinete/:nombre', (req,res)=>{
      res.json(getGabinete(req.params.nombre));
})


export default router;