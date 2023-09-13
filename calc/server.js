const express=require("express")
const Calculate = require('./Calc');
const readline=require("readline");

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
 


const app=express();
const port=8000;

const question = process.argv.slice(2).join(' ');

if (!question) {
 

  rl.question("What is <num1> <operation> <num2>?:",(question)=>{
    const result = Calculate(question);
    console.log(result);
  })
}

app.listen(port,()=>{
  // console.log(`Server is Started in ${port}`)
})