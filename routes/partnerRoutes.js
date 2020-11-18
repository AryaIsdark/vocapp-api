import { Router } from 'express'
import * as actions from '../db/partner/actions'

const router = Router()

//GET:api/v1/partners
router.get('/', async (req, res) => {
    try {
        const response = await actions.getAllData()
        
        return res.status(200).send({
            success: 'true',
            message: 'partner retrieved successfully',
            data: response.data.map((element) => element.data)
        })
    }
    catch (error) {

    }
});

//GET:api/v1/partners/:id
router.get('/:id', async (req, res) => {
    try {
        const response = await actions.getData(req.params.id)
        return res.status(200).send({
            success: 'true',
            message: 'partner retrieved successfully',
            data: response.data
        })
    }
    catch (error) {

    }
});

//GET:api/v1/partners
router.post('/', async (req, res) => {
    try {
        const response = await actions.createData(req.body)
        return res.status(200).send({
            success: 'true',
            message: 'partner updated successfully',
            data: response.data
        })
    }
    catch (error) {

    }
});

//GET:api/v1/partners
router.put('/', async (req, res) => {
    try {
        const response = await actions.createData(req.body)
        return res.status(200).send({
            success: 'true',
            message: 'partner created successfully',
            data: response.data
        })
    }
    catch (error) {

    }
});

export default router