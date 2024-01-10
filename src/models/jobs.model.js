import { DataTypes }  from "sequelize";
import sequelize from "../utils/sequelize.js";


  const Job = sequelize.define('jobs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
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
    description:{
      type:DataTypes.STRING,
      allowNull:false
    },
    packages:{
      type:DataTypes.STRING,
      allowNull:false
    },
    pacDescription:{
      type:DataTypes.STRING,
      allowNull:false
    },
    deadline:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    subDescription:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{
    createdAt:false,
    updatedAt:false
  });


export default Job;