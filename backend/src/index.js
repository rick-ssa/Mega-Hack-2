require('dotenv').config()

const express = require('express');
const promotionsCategoriasRouter = require('./routes/promotions/categories');
const promotionsProductsRouter = require('./routes/promotions/products');
const usersRouter = require('./routes/user');


require('./database/create/initiate')()


const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

app.use('/promotions/categories',promotionsCategoriasRouter)
app.use('/promotions/products',promotionsProductsRouter)
app.use('/users',usersRouter)

app.listen(port,()=>console.log('listening'))