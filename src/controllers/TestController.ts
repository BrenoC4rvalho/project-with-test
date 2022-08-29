import { Request, Response } from 'express'
import TestService from '../services/TestService'

class TestController {
    
    async index(req: Request, res: Response) {
        try {
            const tests = await TestService.getAll()
            
            if(!tests) {
                return res.status(404).json({ message: 'test not found' })
            }

            return res.status(200).json(tests)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'internal server error.'})
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { tester } = req.body

            if(!tester) {
                return res.json({ message: 'Tester not filled' })
            }

            const newTest = await TestService.create(tester)

            return res.status(201).json(newTest)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'internal server error.'})
        }
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params
            const test =  await TestService.findById(parseInt(id))

            if(!test) {
                return res.status(404).json({ message: 'test not found' })
            }

            return res.status(200).json(test)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'internal server error.'})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { tester } = req.body
            const test =  await TestService.findById(parseInt(id))

            if(!tester) {
                return res.json({ message: 'Tester not filled' })
            }

            if(!test) {
                return res.status(404).json({ message: 'test not found' })
            }

            const editTest = await TestService.update(parseInt(id), tester)

            return res.json(editTest)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'internal server error.'})
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params
            const test =  await TestService.findById(parseInt(id))

            if(!test) {
                return res.status(404).json({ message: 'test not found' })
            }

            await TestService.delete(parseInt(id))

            return res.status(200).json()
        } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'internal server error.'})
        }
    }


}

export default new TestController