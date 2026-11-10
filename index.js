const http = require('http');
require('dotenv').config();
// --------------------------
const app = require('./src/app');
const db = require('./src/db/models');

const HOST_NAME = process.env.DB_HOST;
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const dbCheck = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(
      `Connection with DB <<<${process.env.DB_NAME.toUpperCase()}>>> has been successfully done`,
    );
  } catch (error) {
    console.log('Cant connect with DB: ', error.message);
  }
};

dbCheck();

const syncModel = async (model) => {
  try {
    await model.sync({ alter: true });
    console.log(`Sync of $${model.name} has been done succsessfully`)
  } catch (error) {
    console.log(`Cant sync table ${model.name}: `.error.message);
  }
};

const syncModels = async () => {
  try {
    await db.sequelize.sync({alter:true})
    console.log('Sync with models has been done succsessfully')
  } catch (error) {
    console.log(`Cant sync tables`, error.message);
  }
}

// syncModels()

server.listen(PORT, HOST_NAME, () => 
  console.log(`Server running at http://${HOST_NAME}:${PORT}`)
)
