import { DataTypes }  from "sequelize";
import sequelize from "../utils/sequelize.js";


  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false,
    }, 
    lastname: {
      type:DataTypes.STRING,
      allowNull: false,
  }, 
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
      type:DataTypes.STRING,
    } ,
    role:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"work"
    },
    who:{
      type:DataTypes.STRING,
      allowNull:false
    },
    reyting:{
      type:DataTypes.FLOAT,
      allowNull:false,
      defaultValue:0
    },
    address:{
      type:DataTypes.STRING,
    },
    time:{
      type:DataTypes.FLOAT,
      allowNull:false,
      defaultValue:0
    },
    education:{
      type:DataTypes.STRING,
    },
    language:{
      type:DataTypes.STRING,
    },
    certificate:{
      type:DataTypes.STRING
    },
    description:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{
    createdAt:false,
    updatedAt:false
  });


export default User;