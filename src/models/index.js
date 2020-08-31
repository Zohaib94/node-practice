import Student from './Student';
import ISICCard from './ISICCard';
import Transaction from './Transaction';
// One to One
Student.hasOne(ISICCard);
ISICCard.belongsTo(Student);

// One to Many
ISICCard.hasMany(Transaction);
Transaction.belongsTo(ISICCard);

export default {
  Student,
  ISICCard,
  Transaction,
};
