import { Test, TestInstance } from '../models/Test'
import TestService from './TestService' 

describe('Testing test service', () => {

    let tester = 'Breno'

    beforeAll( async() => {
        await Test.sync({ force: true })
    })

    it('should create a new test', async () => {
        const newTest = await TestService.create(tester) as TestInstance
        expect(newTest).not.toBeInstanceOf(Error)
        expect(newTest).toHaveProperty('id')
        expect(newTest.tester).toBe(tester)
    })

    it('should not allow to create a test with existing tester', async () => {
        const newTest = await TestService.create(tester)
        expect(newTest).toBeInstanceOf(Error)
    })

    it('should find a test by id', async () => {
        const test = await TestService.findById(1) as TestInstance
        expect(test.id).toBe(1)
    })

    it('should get a list of test', async () => {
        const tests = await TestService.getAll()
        expect(tests.length).toBeGreaterThanOrEqual(1)
        for(let i in tests) {
            expect(tests[i]).toBeInstanceOf(Test)
        }
    })

})