import { DataTypes }  from "sequelize";
import sequelize from "../utils/sequelize.js";


  const Category = sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    title: {
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
    }
  },{
    createdAt:false,
    updatedAt:false
  });


export default Category;