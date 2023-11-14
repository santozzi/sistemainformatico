import {Router}  from 'express';

const router = Router();
import {CrearGabinite, getGabinete} from '../controllers/gabinete.controller';
import {CrearPuesto} from '../controllers/puesto.controller';

router.post('/nuevogab',CrearGabinite);
router.post('/nuevoPuesto',CrearPuesto);
router.get('/gabinete/:nombre', (req,res)=>{
      res.json(getGabinete(req.params.nombre));
})


export default router;