import sqlzPkg from "sequelize";
import { Model } from "pwoli";
import sequelize from './index.js';
const DataTypes = sqlzPkg.DataTypes;
export default class Event extends Model {
    getAttributeLabels() {
        return {
            title: 'Tittle',
        }
    };
}

const eventAttributes = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: 'id',
    },
    title: {
        type: DataTypes.STRING(45),
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: 'title',
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "createdAt",
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "updatedAt",
    }
};
const eventOptions = {
    tableName: 'event',
    comment: 'ss',
    sequelize,
    hooks: {},
};
Event.init(eventAttributes, eventOptions);
