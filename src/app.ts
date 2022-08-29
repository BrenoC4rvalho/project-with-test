import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import api from './routes/api.routes'

class App {

    server: Express

    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
        this.server.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.server.use(api)
        this.server.use((req: Request, res: Response) => {
            res.status(404).json({ error: 'Endpoint not found.' })
        })
    }

}

export default new App().server