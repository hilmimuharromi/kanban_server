if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const router = require('./routes/indexRouter')


app.use(cors())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Run ${PORT}`);
})