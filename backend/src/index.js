require('dotenv').config()

const express = require('express');
const categoriasRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const stockRouter = require('./routes/stock');


require('./database/create/initiate')()


const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

app.use('/categories',categoriasRouter)
app.use('/products',productsRouter)
app.use('/users',usersRouter)
app.use('/login',loginRouter)
app.use('/users/stock/products',stockRouter)

app.listen(port,()=>console.log('listening'))