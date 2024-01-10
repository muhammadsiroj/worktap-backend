import { DataTypes }  from "sequelize";
import sequelize from "../utils/sequelize.js";


  const Order = sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    username:{
      type:DataTypes.STRING,
      allowNull:false
    },
    user_reyting:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    title: {
        type:DataTypes.STRING,
        allowNull: false
    }, 
    price: {
        type:DataTypes.FLOAT,
        allowNull:false,

    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
  },
  user_image:{
    type:DataTypes.STRING,
    allowNull:false
},
    description:{
      type:DataTypes.STRING,
      allowNull:false
    },
    deadline:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  },{
    createdAt:false,
    updatedAt:false
  });


export default Order;