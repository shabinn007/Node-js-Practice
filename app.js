/** @format */

// /** @format */

// const data = [
//   { id: 1, gender: "male" },
//   { id: 2, gender: "female" },
//   { id: 3, gender: "male" },
//   { id: 4, gender: "female" },
// ];

// data.forEach(person => {
//   if (person.gender === "male") {
//     person.gender = "female";
//   } else if (person.gender === "female") {
//     person.gender = "male";
//   }
// });

// console.log(data);

const data = [1, 2, 4, 5, 6, 7, 3, 45, , 64];

const dataAscend = [...data].sort((a, b) => a - b);
const dataDescend = [...data].sort((a, b) => b - a);

const thirdLowest = dataAscend[2];
const thirdHighest = dataDescend[2];

console.log(dataAscend);
console.log(dataDescend);
console.log("3rd highest number is:", thirdHighest);
console.log("3rd lowest number is", thirdLowest);
