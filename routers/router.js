const express = require("express");
const router = express.Router();
const employeeSchema = require("../models/employee");
const projectSchema = require("../models/project");
const employeeProjectSchema = require("../models/employeeProject");
const employee = require("../models/employee");
const productRouter = require("./productRouter");
const invoiceRouter = require("./invoiceRouter")

router.use("/product",productRouter);
router.use("/invoice",invoiceRouter);


router.post("/addEmployee", async (request, response) => {
  console.log(request.body);
    const employee = new employeeSchema(request.body);
    try {
      await employee.save();
      response.send(employee);
    } catch (error) {
      response.status(500).send(error);
    }
})

router.post("/addProject", async (request, response) => {
    const project = new projectSchema(request.body);
    try {
      await project.save();
      response.send(project);
    } catch (error) {
      response.status(500).send(error);
    }
})

router.post("/assignProject", async (request, response) => {
    const project = new employeeProjectSchema(request.body);
    try {
      await project.save();
      response.send(project);
    } catch (error) {
      response.status(500).send(error);
    }
})


router.get("/getEmloyeeProject", async (request, response) => {
    let getEmployeeProject = await employeeSchema.aggregate([
      { 
        "$lookup": 
        {
          "from": employeeProjectSchema.collection.name,
          "localField": "employeeId",
          "foreignField": "employeeID",
          "as": "employeeProject"    
        }
      },
      {
        $project: {
          _id:0,
          employeeName:1,
          employeeProjectCount:{$size:"$employeeProject"},
        }
      }
    ]);
    response.status(200).json(getEmployeeProject)
})

router.get("/getAllEmployees",async (req,res) => {
    try{
      let empList = await employeeSchema.find();
      res.status(200).json(empList);
    }catch(error){
      console.log(error)
      res.status(500).send(error)
    }
})

module.exports = router;