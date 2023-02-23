const express = require('express');
const cors = require('cors');

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}


//MiddleWare

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


//Router

const router = require('./routes/userRoutes.js')
app.use('/api/user', router)


//Testing API

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server started!`)
})
