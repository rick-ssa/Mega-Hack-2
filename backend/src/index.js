const express = require('express');
const promotionsCategoriasRouter = require('./routes/promotions/categories');
const promotionsProductsRouter = require('./routes/promotions/products');
const usersRouter = require('./routes/user');
const app = express()

app.use(express.json())

app.use('/promotions/categories',promotionsCategoriasRouter)
app.use('/promotions/products',promotionsProductsRouter)
app.use('/users',usersRouter)

app.listen(3333,()=>console.log('listening'))