const { Sequelize, DataTypes } = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

// Initialize Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false
});

// Test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const db = {};

// Define models
db.User = require('./user')(sequelize, DataTypes);
db.Expense = require('./expense')(sequelize, DataTypes);
db.Category = require('./category')(sequelize, DataTypes);
db.PaymentMethod = require('./paymentMethod')(sequelize, DataTypes);
db.Budget = require('./budget')(sequelize, DataTypes);

// Set up relationships
db.User.hasMany(db.Expense, { foreignKey: 'user_id' });
db.Expense.belongsTo(db.User, { foreignKey: 'user_id' });

db.User.hasMany(db.Category, { foreignKey: 'user_id' });
db.Category.belongsTo(db.User, { foreignKey: 'user_id' });

db.User.hasMany(db.PaymentMethod, { foreignKey: 'user_id' });
db.PaymentMethod.belongsTo(db.User, { foreignKey: 'user_id' });

db.User.hasMany(db.Budget, { foreignKey: 'user_id' });
db.Budget.belongsTo(db.User, { foreignKey: 'user_id' });

db.Category.hasMany(db.Expense, { foreignKey: 'category_id' });
db.Expense.belongsTo(db.Category, { foreignKey: 'category_id' });

db.Category.hasMany(db.Budget, { foreignKey: 'category_id' });
db.Budget.belongsTo(db.Category, { foreignKey: 'category_id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
