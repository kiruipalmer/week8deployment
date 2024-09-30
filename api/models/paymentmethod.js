module.exports = (sequelize, DataTypes) => {
    const PaymentMethod = sequelize.define('PaymentMethod', {
      payment_method_id: {
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
      payment_method_name: {
        type: DataTypes.STRING(50),
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
      tableName: 'payment_methods'
    });
  
    return PaymentMethod;
  };
  