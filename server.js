const express = require('express');
const cors = require('cors');
const app = express();




app.use(cors())
app.use(express.json())
const connect =require('./config/connection')
app.use(require('./routes/userRouter'))

const port = '8000'
connect.then(db =>{
    if(!db) return process.exit(1)
    app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:8000`)
    })
    app.on('error',err => console.log(`Failed To Connect wite HTTP Server:${err}`))
}).catch(error =>{
    console.log(`connection Failed ${error}`);
})




