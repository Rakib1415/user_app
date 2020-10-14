const express = require('express');
const morgan = require('morgan');
const userRouter = require('./userRouter');
const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/users',userRouter);

app.get('*',(req, res)=>{
    res.send('<h1>please use right router</h1>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running with ${PORT}`);
});

