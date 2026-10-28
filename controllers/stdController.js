const student = require("../data/std.js")

//fetch all data
const sendStd = (req, res) => {
    try{
        res.status(200).json({
            success: true,
            body: student,
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
}


//fetch single data
const sendStdById = (req, res) => {
    try{
        const id = req.params.id;

        const getStd = student.find(s => s.id === id);

        if(!getStd){
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }

        res.status(200).json({
            success: true,
            body: getStd,
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
}

//create
const createStd = (req, res) =>{
    try{
        let newStd = {
            id: Date.now().toString(),
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            contact: req.body.contact,
        }

        student.push(newStd)

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
}

//update
const updateStd = (req, res) =>{
    try{
        let studentData = student.find(s => s.id === req.params.id);

        if(!studentData){
            return res.status(404).json({
                success: false,
                body: studentData,
                message: "Student not found"
            })
        }

        studentData.fname = req.body.fname;
        studentData.lname = req.body.lname;
        studentData.email = req.body.email;
        studentData.contact = req.body.contact;

        res.status(200).json({
            success: true,
            body: studentData,
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
}

//delete
const deleteStd = (req, res) => {
    try{
        let getInd = student.findIndex(s => s.id === req.params.id);

        if(getInd === -1){
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }

        let deleteStd = student.splice(getInd, 1);

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
}

module.exports = {
    sendStd,
    sendStdById,
    createStd,
    updateStd,
    deleteStd
}