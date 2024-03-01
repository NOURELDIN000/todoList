// window.onload =function(){

//task 1
// let num1 = 4 ;
// let num2 = 0 ;
// let num3 = -1 ;

//     if(num1 > num2 && num1 > num3){
//         if(num2 > num3){
//             console.log(num1);
//             console.log(num2);
//             console.log(num3);
//         }
//         else{
//             console.log(num1);
//             console.log(num3);
//             console.log(num2);

//         }
//     }

//     else if(num2 > num1 && num2 > num3){
//         if(num1 > num3){
//         console.log(num2);
//         console.log(num1);
//         console.log(num3);
//         }
//         else{
//         console.log(num2);
//         console.log(num3);
//         console.log(num1);
//         }

//     }

//     let x = 0;
// let y = 60;
// let z = 70;
// if (x > y && x > z) {
//     if (y > z) {
// console.log(x + "," + y + "," + z);
//     } else {
//  console.log(x + "," + z + "," + y);
//     }
//   } else if (y > x && y > z) {
//     if (x > z) {
//       console.log(y + "," + x + "," + z);
//     } else {
//       console.log(y + "," + z + "," + x);
//     }
//   }else if(z > x && z > y){
//     if (x > y) {
//       console.log(z + "," + x + "," + y);
//     } else {
//       console.log(z + "," + y + "," + x);
//     }

//   }

// task2

// for(let i=0;i<=15;i++){
//     if(i%2==0){
//         console.log(i + " "+"is even")
//     }else{
//         console.log(i + " "+"is odd");

//     };
// };

//task 3

// let students=[
//     {name:"nour",grade: 100},
//     {name:"ali",grade: 100},
//     {name:"ahmed",grade: 100},
// ];

// let sum=0;
// let size=students.length;

// for(let i=0; i< students.length; i++){
//     sum += students[i].grade;

// };

// let average= sum / size;
//   console.log(average);
// if(average>=100){
//     console.log("The average grade is A");
// } else if(average>=90){
//     console.log("The average grade is B");

// } else if(average>=80){
//     console.log("The average grade is C");
// } else if(average>=70){
//     console.log("The average grade is D");
// } else{
//     console.log("The average grade is F");

// }

// let twos = document.querySelector("i")

// let mybtn =document.getElementById("z");

// mybtn.onclick = function () {
//   console.log("cliced");
// };

// let userDate = document.querySelector("[name='date']")
// let userText = document.querySelector("[name='text']")

// document.forms[0].onsubmit = function(e){
//   let dValid=false;
//   let tValid=false;
//   // console.log(userDate.value)
//   // console.log(userText.value)
//   if(userDate.value!==''){

//     dValid=true;

//   }
//   if(userText.value!==''){

//     tValid=true;

//   }
//   if(dValid===false || tValid===false){

//   e.preventDefault();
//   }

class Task {
  constructor(date, n) {
    this.date = date;
    this.name = n;
    this.status = false;
  }
  updateTask(s) {
    return (this.status = s);
  }
}
let t3 = [
  (t1 = new Task("2-2-2023", "call", true)),
  (t2 = new Task("2-6-2024", "walk", true)),
];

// t1.updateTask(false);
// console.log(t1);

class ToDoList {
  constructor(date, evaluation, listTasks) {
    this.date = date;
    this.evaluation = evaluation;

    this.listTasks = listTasks;

   
  }
}
// let arrTodo = [
// to1 = new ToDoList('20-3-2019' ,8,[t1,t2]),
// to2 = new ToDoList('10-1-2010' ,10,[t1,t2])];
// const to2 = new ToDoList('2-5-2023','play',false,10,[t1,t2]);
// console.log(to1);
// console.log(to2);

// let t4 = new Task(new Date("2023/2/20"), "playing" )

// t4.updateTask(true);

let arr = [];

 function addTask(date, n, cB) {
  let newTask = new Task(date, n, true);
  

  console.log(arr.push(newTask));
  cB();
}

// let addArr =[addTask('1/1/2010','swim'),
//     addTask('4/3/2022','making'),
//     addTask('5/2/2022','sleep'),
//     addTask('1/1/2017','zzz'),addTask('1/1/2008','mmm')
//     ];

// console.log(addArr);

function sortedAddTask() {
  arr.sort((a, b) => b.date - a.date);

  return;

  // console.log(addTask);
  // console.log(addArr);
}

let t5 = new Task(new Date("1979/8/2"), "playing");
t5.updateTask(true);
// t5.status= true;
// console.log(t5);

// async function checkStatus(t5) {
//   if (t5.status !== false) {
//     // t5.status = 'Done';
//     return t5;
//   } else {
//     throw new Error("no status");
//   }
// }

// async function reminder() {
  
  
//   try {
//     let result = await checkStatus(t5);
//     console.log(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// };




// setInterval(() => {
//   reminder();
// }, 5000);

// console.log(t5);

// async function reminder() {
//   setInterval(() =>
//     addTask(date,n)
//   , 10000);
// }

addTask(new Date("2017/7/3"), "talking", sortedAddTask);
addTask(new Date("2000/4/5"), "walk", sortedAddTask);
addTask(new Date("2005/7/7"), "run", sortedAddTask);

addTask(new Date("2023/2/20"), "playing", sortedAddTask);

console.log(arr);

// console.log(addArr);

// addTask('1/1/2003','ggg',sortedAddTask);

("==========================================================================================");

let arr2 = [];
function buildTodoList(date, listTasks) {
  let buildTask = new ToDoList(date, 0, listTasks);
  // console.log(buildTask);
  // arr.push(buildTask);
  // console.log (buildTask);
  // console.log(arr);
  console.log(arr2.push(buildTask));
}

buildTodoList("2-6-2017", t3);
buildTodoList("1-9-2000", t3);
buildTodoList("1-2-2011", t3);
buildTodoList("7-9-2009", t3);

let evaluationsProcessed = 0;

function evaluateDay(date, evaluation, cB) {
  for (const e of arr2) {
    if (e.date === date) {
      e.evaluation = evaluation;
      cB();
      return;
    }
  }

  cB();
}

function sortToDo() {
  arr2.sort((c, d) => d.evaluation - c.evaluation);
}

evaluateDay("1-9-2000", 3, sortToDo);
evaluateDay("2-6-2017", 9, sortToDo);
evaluateDay("1-2-2011", 10, sortToDo);

console.log(arr2);

// console.log(arr2);

// console.log(arr);
// evaluateDay('2-7-2019',2);
// console.log(todoLists);

// };


// async function checkStatus() {
//   return new Promise((resolve,reject)=>{
//   if (t5.status !== false) {
    
//     resolve(t5);
//   } else {
//     reject("no ");
//   }
// });

// };

// function reminder() {
//   setInterval(()=>{
//   checkStatus()
//     .then((message)=> {
//       console.log(message) 
//     })
//     .catch((error)=> {
//       console.log(error)
//     });

//   },3000)
  
// };

// reminder();






















