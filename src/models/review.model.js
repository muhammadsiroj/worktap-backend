import { DataTypes }  from "sequelize";
import sequelize from "../utils/sequelize.js";


  const Review = sequelize.define('review', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    }, 
    reyting:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0
    },
    image:{
        type:DataTypes.STRING,
    },
    description:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{
    createdAt:false,
    updatedAt:false
  });


export default Review;