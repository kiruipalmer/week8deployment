module.exports = (sequelize, DataTypes) => {
    const Budget = sequelize.define('Budget', {
      budget_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'category_id'
        }
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      timestamps: false,
      tableName: 'budgets'
    });
  
    return Budget;
  };
  