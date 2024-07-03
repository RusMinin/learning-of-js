// let num = 42; //number
// let firstName = "Ruslan"; //string
// const isProgrammer = true; 

/* Can do
let $ = 'test'
let $num = 52
let num$ = 23
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Maria' //bad
let myNum = 23 //good
*/

/* Rectricted
 let 42num = '11'
 let my-roll = 1
 let false = '11'
*/

// firstName = 'Maxim'
// isProgrammer = false  error because of const

// alert(firstName)
// console.log('Test:', firstName, isProgrammer, true)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10) // float (4.2)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + (10 * 2)) / (5 - 1)
// console.log(num3)

// const fullName = firstName + ' Minin'
// const fullName = firstName + ' ' + 'Minin'
// console.log(fullName)

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const submitBtn = document.getElementById("submit");
let action = "";

// console.log(typeof sum)

// function result() {
//     if(plusBtn.onclick) {
//         Number(input1.value) + Number(input2.value)
//     }else {
//         Number(input1.value) - Number(input2.value)
//     }
//     return(console.log(result))
// }

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
//   if (actionSymbol === "+") {
//    return num1 + num2;
//   } else {
//    return num1 - num2;
//   }
return action = '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
const result = computeNumbersWithAction(input1, input2, action)
printResult(result)

//   if (action === "+") {
//     computeNumbersWithAction()
//     printResult(sum);
//   } else {
//     const sum = Number(input1.value) - Number(input2.value);
//     printResult(sum);
//   }
};
