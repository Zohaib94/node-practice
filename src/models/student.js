import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Student extends Model {}

Student.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    max: 20,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    max: 20,
  },
}, {
  sequelize,
  modelName: 'Students',
});

export default Student;
