const cl = console.log;

let std = [
    {
        "id": "1",
        "fname": "Pratiksha",
        "lname": "Kanje",
        "email": "pratikshakanje@gmail.com",
        "contact": "9878563789"
    },
    {
        "id": "2",
        "fname": "Chetan",
        "lname": "Kanje",
        "email": "chetankanje@gmail.com",
        "contact": "84525989767"
    },
    {
        "id": "3",
        "fname": "Akanksha",
        "lname": "Kanje",
        "email": "akankshakanje@gmail.com",
        "contact": "9854376869"
    }
]  

const express = require("express");

const app = express();

app.use(express.json())

//get all post
app.get("/api/std", (req, res) => {
    try{
        res.status(200).json({
            success: true,
            body: std,
            message: "Student fetched successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Somthing went wrong",
            error: err.message
        })
    }
})

//get single post
app.get("/api/std/:id", (req, res) => {
    try{
        const id = req.params.id;

        const student = std.find(s => s.id === id);

        if(!student){
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }

        res.status(200).json({
            success: true,
            body: student,
            message: "Student fetched successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
})

//create
app.post("/api/std", (req, res) =>{
    try{
        let newStd = {
            id: Date.now().toString(),
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            contact: req.body.contact,
        }

        std.push(newStd)

        res.status(201).json({
            success: true,
            body: newStd,
            message: "Student created successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
})

//update
app.patch("/api/std/:id", (req, res) =>{
    try{
        let student = std.find(s => s.id == req.params.id);

        if(!student){
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }

        student.fname = req.body.fname;
        student.lname = req.body.lname;
        student.email = req.body.email;
        student.contact = req.body.contact;

        res.status(200).json({
            success: true,
            body: student,
            message: "Student updated successfully",
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
})

//delete
app.delete("/api/std/:id", (req, res) => {
    try{
        let getInd = std.findIndex(s => s.id == req.params.id);

        if(getInd === -1){
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }

        let deleteStd = std.splice(getInd, 1);

        res.status(200).json({
            success: true,
            body: deleteStd[0],
            message: "Student deleted successfully",
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err.message
        })
    }
})


app.listen(3000, () => {
    cl("Student data fetched successfully")
})





