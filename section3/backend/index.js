// import express
const express = require('express');

// importing routers
const userRouter = require('./routers/userRouter');
const blogRouter = require('./routers/blogRouter');

//intialize express app
const app = express();
const port = 5000;

//middleware
app.use('/user',userRouter);
app.use('/blog',blogRouter);

// routes
app.get('/',(req, res) => {
    res.send('Response from express');
} );

// add

app.get('/add',(req,res) => {
    res.send('Response from add')
});

// getall

app.get('/getall',(req,res) => {
    res.send('Response from getall')
});

// delete

app.get('/delete',(req,res) => {
    res.send('Response from delete')
});


app.listen( port, () => {console.log('express server started at 5000') } );
