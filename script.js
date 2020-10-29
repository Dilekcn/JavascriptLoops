


// /** For loop */
// var fullStack =["HTML","CSS","JS","Nodejs","Reack"];
// let dev=" ";

// for(let i=0; i<fullStack.length; i++){
// dev=dev +" "+fullStack[i];

// } console.log(dev);

// /*while loop*/

// var fullStack =["HTML","CSS","JS","Nodejs","Reack"];
// let dev=" ";
// i=0;

// while(i<fullStack.length){
// dev=dev +" "+fullStack[i];
// i++;
// } console.log(dev);

/******for..........of*******/
const names =["Ed","Kim","Jim","Kam","Lee"];

for(name of names){
  console.log(name);
  if(name==="Jim"){
    console.log("Jim is in my list");
    break;
  }
}

let person =["Kim","London",28];
let x;
for(x of person){
  console.log(x)
}

/******for..........in*******/
for(index in topics){
  console.log(index);
}

/*While Odd Number*/
// i=0;
// let num= " ";

// while(i<10){
//       i++; 
//     if(i%2==0){
//         continue;
//     }
//    num += i +'-';
//    }console.log(num);
// print :1-3-5-7-9-

/*Do while*/

// i=20;
// let num ='';

// do {   
//     num +=i +' ';
//     i++;
// }while(i<10)

// console.log(num);