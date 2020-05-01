const express = require('express');
const promotionsCategoriasRouter = require('./routes/promotions/categories');
const promotionsProductsRouter = require('./routes/promotions/products');
const lojasRouter = require('./routes/lojas');
const app = express()

app.use('/promotions/categories',promotionsCategoriasRouter)
app.use('/promotions/products',promotionsProductsRouter)
app.use('/lojas',lojasRouter)

app.listen(3333,()=>console.log('listening'))