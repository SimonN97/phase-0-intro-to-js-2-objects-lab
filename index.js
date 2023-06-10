// Write your solution in this file!
const employee ={name: "Simon", streetAddress: "Nairobi"};
console.log(employee)

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newEmployee={...employee};
    newEmployee[key]=value;
    console.log(newEmployee);
    return newEmployee;
}
updateEmployeeWithKeyAndValue(employee,"name","Wanjira");

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key]=value;
    console.log(employee);
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Njuguna");

function deleteFromEmployeeByKey(employee,key) {
    const nwemployee={...employee};
    delete nwemployee[key];
    console.log(nwemployee);
    return nwemployee;
}
deleteFromEmployeeByKey(employee,"streetAddress");

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    console.log(employee);
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee,"name")