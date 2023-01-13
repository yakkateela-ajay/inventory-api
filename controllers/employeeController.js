// task 1
// to declare a variable -> var, let, const 
let arr = [5,2,2,3,3,3]; // Faithing All employees
console.log("unique", [...arr]); // job change ki new technology learning ani cheppu 
function uniqueValues(){
    let result = [...new Set(arr.filter((ele,index) =>  arr.indexOf(ele) !== index))];
    console.log(result);
}

let a ;
let obj = {
    name: "ajay",
    designation: "SDE 1"
};

let string = "i am ajay";
// {
//     a: 2,
//     j: 1,
//     y:1
// }

function occurances(str){
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) !== " "){
            obj[str.charAt(i)] = str.charAt(i) in obj ? obj[str.charAt(i)] + 1 : 1;
        }
      // obj.a  = "a" in obj ? value + 1 : 1
    }
    return obj;
}

console.log(uniqueValues(),arr.indexOf(2))