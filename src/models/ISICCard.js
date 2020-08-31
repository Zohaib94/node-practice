import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class ISICCard extends Model {}

ISICCard.init({
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    max: 16,
    min: 16,
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: false,
    max: 5,
    min: 3,
  },
  expiry: {
    type: DataTypes.STRING,
    allowNull: false,
    max: 5,
    min: 3,
  },
}, {
  sequelize,
  modelName: 'ISICCards',
});

export default ISICCard;
