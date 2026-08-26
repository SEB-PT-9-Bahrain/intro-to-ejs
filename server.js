// imports
const express = require("express") //importing express package
const app = express() // creates a express application






app.use(express.static('public')); //all static files are in the public folder




// Routes go here
app.get('/',(req,res) => {
    res.render('homepage.ejs',{
        teacherName: 'Sayed Hamed',
        grade: 60,
        languages:['JavaScript','Python']
        })
})

app.get('/about',(req,res)=>{
    res.render('about-me.ejs')
})

 




app.listen(3000,()=>{
    console.log('App is Running')
}) // listen on port 3000
