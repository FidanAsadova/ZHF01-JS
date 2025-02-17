// // DATA TYPES

// console.log("surname:", mySurname);

// let myName = "Fidan";

// console.log("myName:", myName);

// let myScore = 87;
// console.log("myScore:", myScore);

// let isOnline = true;

// let myOld;

// myOld = 22;

// console.log("myOld:", myOld);

// let examScore = null;

// examScore = 24;

// console.log("examScore:", examScore);

// // let, var, const

// {
//   let myCity = "Ganja";
//   console.log("myCity:", myCity);
// }
// var mySurname = "Asadova";

// var mySurname = "Aliyeva";

// let myUni = "GDU";
// console.log("myUni:", myUni);

// const MY_PASSWORD = 1234;

let obj = {
  user: "fidan",
  nameS: "asadova",
  city: ["baku", "ganja"],
};

// let newObj = { ...obj };
let newObj = obj;
// let newObj = structuredClone(obj);

newObj.city[0] = "gabala";
console.log(obj);
console.log(newObj);
