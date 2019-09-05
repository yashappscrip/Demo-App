function firstFunction(){
    console.log("Module function");
}
var myVariable="firstVariable";
module.exports.myFunction=firstFunction;
module.exports.Variable=myVariable;