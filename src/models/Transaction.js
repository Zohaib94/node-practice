import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Transaction extends Model {}

Transaction.init({
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Transactions',
});

export default Transaction;
