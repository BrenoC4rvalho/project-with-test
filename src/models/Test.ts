import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../database/pg'

export interface TestInstance extends Model {
    id: number
    tester: string
}

export const Test = sequelize.define<TestInstance>('Test', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    tester: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    tableName: 'tests',
    timestamps: false
})