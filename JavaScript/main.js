// let breakthrough = 24;
// console.log(breakthrough)
// console.log("Hello-World")
// // alert("4+4")
// let x = 5;
// let dami= 26;
// console.log(dami+x)
let name;
console.log(name)
console.log(7 % 7)
let dami = true || false ; console.log(dami)
let counter = 0; counter++; console.log(counter)
counter ++; console.log(counter)
let result = (5+3) * 2 > 10 || false; console.log(result)

// let age;
// if(condition){
//     block of code.
// }
let age = 75;
if(age < 16){
    console.log("you are too young to drive")
}else if (age >= 16 && age < 70) {
    console.log("you are eligible to drive")
}else if (age >= 70) {
    console.log("baba no go die for road, get a driver")

}

let day = 6 ;

switch (day) {
    case 1: console.log(" it is the start of the week") ;
    break;

    case 2: console.log ("go for your urgent 2k this week");
    break;

    case 6: console.log ('TGIF italawa, we outside')
    break;
    default: console.log ('it is just a regular day')
}

// for (i = 0; i < 10; i++){
//     console.log(i)
// }


// let a = 0; do {console.log(a); a++} while (a < 2) //do while

// let i = 0; while (i < 3) {console.log(i); i++} //while loop

//for each loop
// const numbers = [10, 20, 30];

// numbers.forEach(num => {
//     console.log(num);
// });
//for in loop
// const person = [{
//     id: 1,
//     name: "B-hay",
//     age: 21,
//     occupation: "Mobile App Developer"
// },
// {
//     id: 2,
//     name: "Dami",
//     age: 27,
//     occupation: "Front end  Developer"
// }];

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }


// const Nav = ['home', 'about', 'services ', 'contact us']

// Nav.map((data, index)=>(
//     <ul key={index}>
//         <li>{data}</li>
//     </ul>
// ))


function victor() {
    console.log("hello every body")

};
victor()

let BE = 2;
let FE = 6;

function nupat (){
    console.log(FE + BE)
}
nupat()

// function nupat (FE, BE) {
//         let c = parseInt(FE + BE)
//         console.log(c)

//         // console.log(FE + BE)
// }
// nupat(6, 2)

// const nupat =  (FE, BE)=>{
//  console.log(FE + BE)
// }

// // ()=>();
// // ()=>{

// // };
// // onclick = {()=> console.log("")}
// nupat(34, 50)
function ola (){
    console.log (FE + 2 * 4)
};
ola();

function greet( name = "Guest") {
    console.log(`Hello, ${name}  TGIF`)
};
greet("tola");

let person = {
    name: "Alice",
    occupation: "nurse"
};
console.log(person.name, person.occupation);

let people = {
    name: 'bob',
    greet: function(){console.log('Hello')}
 };

 people.greet()

 //bracket notation 
 let prop = 'name';
 console.log(person[prop])

 //nested object
 let student  = {
    name: "charlie",
    address: {city: "New York"}
 };
 console.log(student.address.city)

 //modify property
 person.age =31;

 console.log(person.name, person.age, person.occupation)
 console.log(person)