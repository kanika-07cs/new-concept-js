/*let animals=["cat","dog","cow","rabbit","elephant"];
var ani1="crow";
for(let i=0;animals[i]!='\0';i++){
    if(animals[i]===ani1){
        console.log("Found element");
    }
    else{
        console.log("element not found");
    }
    break;
}

// normal function
function greet(){
    console.log("Hello guys");
}
greet();

//arrow function
let multiply=(a,b)=>a*b;
console.log("Multiplication Result:",multiply(5,6));

//function expression
let add=function (x,y){
    return x+y;
}
console.log("Addition result:",add(5,7));*/

//task
let mark=document.getElementById('mark');
let newGrade=document.getElementById('grade');
let fname=["kani","keerth","neha"];
let marks=[[78,85,46],[86,72,94],[85,64,55]];
function totalSum(){
    for(let i=0;i<fname.length;i++){
        let total=0;
        for(let j=0;j<marks.length;j++){
            total+=marks[i][j];
        }
        console.log("name:",fname[i],"total marks:",total);
        grade(total)
    }
}
function grade(total){
    let g;
    if(total>250){
        g="A";
    }
    else if(total>200){
        g="B";
    }
    console.log("grade:",g);
}
totalSum();