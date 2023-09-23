import {Router} from 'express'
import { upload } from '../middlewares/multer.middleware.js'

const router = Router()

router.get('/', async(req,res) => {

})

router.get('/:idProducts', async(req,res) => {
  
})

router.post('/',upload.single('productimage') ,async(req,res) => {
    res.send('Probando multer')
})

router.delete('/:idProducts', async(req,res) => {

})

router.put('/:idProducts', async(req,res) => {
  
})

export default router