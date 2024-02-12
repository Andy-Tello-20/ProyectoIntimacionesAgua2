import { Router } from 'express';
const router = Router();
import  { authMiddleware, authRolesMiddleware } from '../../utils.js'



//? Middleware para configurar encabezados de caché
const noCacheMiddleware = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    res.setHeader('Cache-Control', 'post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
  };
  

router.get('/', (req, res) => {
    
});

router.get('/menuPrincipal',authMiddleware('jwt'), (req, res) => {
    res.render('menuPrincipal', { title: 'Hello People 🖐️' });
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'Hello People 🖐️' });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Hello People 🖐️' });
});

router.get('/create',authMiddleware('jwt'), authRolesMiddleware('admin'), (req, res) => {
    res.render('create', { title: 'Hello People 🖐️' });
});

router.get('/getUser',authMiddleware('jwt'), authRolesMiddleware('admin'), (req, res) => {
    res.render('getUser', { title: 'Hello People 🖐️' });
});

router.get('/UserByLastName',authMiddleware('jwt'), authRolesMiddleware('admin'), noCacheMiddleware,(req, res) => {
    res.render('getUserByLastName', { title: 'Hello People 🖐️' });
});

router.get('/updateUserIndex',authMiddleware('jwt'), authRolesMiddleware('admin'), (req, res) => {
    res.render('searchUser', { title: 'Hello People 🖐️' });
});

export default router;