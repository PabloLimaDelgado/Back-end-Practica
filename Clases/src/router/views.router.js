import { Router } from "express";

const router = Router()

router.get('/vista1', (req, res) =>{
    res.render('vista1')
  })

router.get('/', (req, res) => {
    res.render('singup')
})

export default router