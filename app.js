const express = require('express');
const app = express();
const path = require('path');
const userRoute = require('./routes/userRoutes');//userRoute
app.use(express.static(path.join(__dirname,'public')));//Link to CSS
const port = 4700;

app.use(userRoute);//userRoute
app.set('view engine','pug');//pug declearing
app.set('views','views');//pug file
app.listen(port, ()=>{
    console.log('Server is running !! '+port);
}); 