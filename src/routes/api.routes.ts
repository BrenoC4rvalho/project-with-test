import { Router } from 'express'
import TestController from '../controllers/TestController'

const routes = Router()

routes.get('/test', TestController.index)
routes.post('/test', TestController.create)
routes.get('/test/:id', TestController.show )
routes.put('test/:id', TestController.update)
routes.delete('test/:id', TestController.destroy)

export default routes