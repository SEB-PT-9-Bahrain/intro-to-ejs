// imports
const express = require("express") //importing express package
const app = express() // creates a express application






app.use(express.static('public')); //all static files are in the public folder


// DATABASE
const students = [
    {
        id: 1,
        name: 'Waleed'
    },
    {
        id: 2,
        name: 'Mahdi'
    },
    {
        id: 52,
        name: 'Ahmed'
    },
    {
        id: 4,
        name: 'Ali'
    }
]



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

app.get('/students',(req,res)=>{
    res.render('all-students.ejs',{students: students})
})

app.get('/students/:studentId',(req,res)=>{
    console.log(req.params.studentId)
    const foundStudent = students.find((oneStudent)=>{
        return oneStudent.id === Number(req.params.studentId)
    })
    res.render('student-details.ejs',{student: foundStudent})
})

 

// Exercise 1:
// 1. create a all-students.ejs page and put an h1 inside that says "All Students Page"
// 2. create a app.get route that renders this page IF the user goes to /students



app.listen(3000,()=>{
    console.log('App is Running')
}) // listen on port 3000
