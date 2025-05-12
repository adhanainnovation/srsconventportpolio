require('dotenv').config();
const express=require('express');
require('./config/db')
const imagerout=require('./router/uploadrout')
const addmissionrouter=require('./router/addmissionfromrouts')
const path=require('path')
const cors=require('cors')



const app=express();
const PORT=process.env.PORT||4044;
app.use(cors({ origin: "http://localhost:5173" }));

//middlewares 
app.use((express.json()))
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/images',imagerout)

app.use('/api/addmission',addmissionrouter)
app.use('/srsimage', express.static(path.join(__dirname, 'srsimage')));

app.listen(PORT,()=>{
    console.log(`server runnig on port ${PORT}`)
})