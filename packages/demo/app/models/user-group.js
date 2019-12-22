const { Model, Sequelize } = require('sequelize')
const sequelize = require('../libs/db')

class UserGroup extends Model {
  
}

UserGroup.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: '分组id'
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: '用户id'
    }
  },
  {
    sequelize,
    tableName: 'lin_user_group',
    modelName: 'user_group',
    indexes: [
      {
        name: 'user_id_group_id',
        using: 'BTREE',
        fields: ['user_id', 'group_id']
      }
    ]
  }
)