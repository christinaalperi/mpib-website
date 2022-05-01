const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
const url = `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INS_APP_ID}&redirect_uri=${process.env.REACT_APP_INS_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`
    
app.use(cors())
app.get('/', (req, res) => {
    console.log(req)
    console.log(res)
})


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

