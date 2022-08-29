import { Test } from "../models/Test"

class TestService {
    
    async getAll() {
        return await Test.findAll()
    } 

    async create(tester: string) {
        const hasTest = await Test.findOne({ where: { tester } })
        if(!hasTest) {
            return await Test.create({
                tester
            })
        } else {
            return new Error('Tester existing')
        }
    }

    async findById(id: number) {
        return await Test.findByPk(id)
    }

    async update(id: number, tester: string) {
        return await Test.update({ tester }, {
            where: { id }
        })
    }

    async delete(id: number) {
        return await Test.destroy({
            where: { id }
        })
    }

}

export default new TestService