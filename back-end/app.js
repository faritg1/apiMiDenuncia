
const express = require('express')
const app = express()


const User=require('./models').user

////aqui hacemos las importaciones y que todo quede dentro de ella

const dotenv = require('dotenv');
const cors = require('cors')
// const session = require('express-session');
//const { auth } = require('express-openid-connect');
const morgan = require('morgan')
dotenv.config()

require('./index')


const port= 4000

app.listen(port, () => {
  console.log('El servidor está escuchando en el puerto ' + port);
});

module.exports = app;
