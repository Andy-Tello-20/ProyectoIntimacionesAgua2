import { Router } from 'express';
import UsuarioModel from '../../models/user.models.js';

const router = Router();

router.post('/create', async (req, res, next) => {
  try {
    const { body } = req;
    const user = await UsuarioModel.create(body);
    res.redirect('/create')
  } catch (error) {
    next(error);
  }
});

router.get('/getDataBase', async (req, res, next) => {
  try {

    const users = await UsuarioModel.find({});
    res.status(200).json(users);;
  } catch (error) {
    next(error);
  }
});

router.post('/getUserByLastName', async (req, res, next) => {
  try {

    const {last_name} = req.body;
    const users = await UsuarioModel.find({ last_name: last_name });

    
     res.render('cards', { listUsers: users.map(user => user.toJSON()), title: 'Lista de usuarios' });


  } catch (error) {
    next(error);
  }
})

export default router;