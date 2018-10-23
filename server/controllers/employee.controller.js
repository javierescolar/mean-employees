const Employee = require('../models/employee');
const EmployeeController = {};


EmployeeController.getEmployees = async (req,res) => {
   const employees =  await Employee.find();
   res.json(employees);
};


EmployeeController.createEmployee = async (req,res) => {
    const employee = new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });
    await employee.save();
    res.json({
        "status":"Empleado Guardado"
    });
};


EmployeeController.getEmployee = async (req,res) => {

    const employee = await Employee.findById(req.params.id)
     res.json(employee);
    
};


EmployeeController.editEmployee = async (req,res) => {
    const id = req.params.id;
    const employee = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
    }
    await Employee.findByIdAndUpdate(id,{$set:employee},{new:true});
    res.json({
        status:"Empleado Actualizado"
    });
};


EmployeeController.deleteEmployee = async (req,res) => {
    const id = req.params.id;
    await Employee.findOneAndDelete(id);
    res.json({
        status:"Empleado Eliminado"
    });
};

module.exports = EmployeeController;