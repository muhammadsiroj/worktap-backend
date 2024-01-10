import  {Sequelize}  from 'sequelize';

const sequelize = new Sequelize('postgres://username:password@host:port/database',{logging: false,})


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection...');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err.message);
  });

export default sequelize;  
