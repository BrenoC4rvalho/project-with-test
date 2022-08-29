import request from 'supertest'
import app from '../app'
import { Test } from '../models/Test'

describe('Testing api routes', () => {

    let tester = 'Breno'

    beforeAll( async() => {
        await Test.sync({ force: true })
    })

    it('should register a new test', (done) => {
        request(app)
            .post('/test')
            .send(`tester=${tester}`)
            .then(response => {
                expect(response.body.error).toBeUndefined()
                expect(response.body).toHaveProperty('id')
                return done()
            })
    })

})