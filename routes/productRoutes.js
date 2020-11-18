import { Router } from 'express'
import * as actions from '../db/product/actions'

const router = Router()

//GET:api/v1/products
router.get('/', async (req, res) => {
    try {
        const response = await actions.getAllData()
        
        return res.status(200).send({
            success: 'true',
            message: 'product retrieved successfully',
            data: response.data.map((element) => element.data)
        })
    }
    catch (error) {

    }
});

//GET:api/v1/products/:id
router.get('/:id', async (req, res) => {
    try {
        const response = await actions.getData(req.params.id)
        return res.status(200).send({
            success: 'true',
            message: 'product retrieved successfully',
            data: response.data
        })
    }
    catch (error) {

    }
});

//GET:api/v1/products
router.post('/', async (req, res) => {
    try {
        const response = await actions.createData(req.body)
        return res.status(200).send({
            success: 'true',
            message: 'product updated successfully',
            data: response.data
        })
    }
    catch (error) {

    }
});

//GET:api/v1/products
router.put('/', async (req, res) => {
    try {
        const response = await actions.createData(req.body)
        return res.status(200).send({
            success: 'true',
            message: 'product created successfully',
            data: response.data
        })
    }
    catch (error) {

    }
});

export default router