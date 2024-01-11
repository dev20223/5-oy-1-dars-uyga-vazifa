// 1-masala

// function array(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     return sum;
//   }
  
//   let numbers = [1, 2, 5, 6, 12, "salom"];
//   console.log(array(numbers));


// 2-masala

// function bigStr(str) {
//     let strings = str.split(" ");
//     let originalStr = "";
//     for (let i = 0; i < strings.length; i++) {
//       let word = strings[i];
//       let bigStrings = word.charAt(0).toUpperCase() + word.slice(1);
//       originalStr += bigStrings + " ";
//     }
//     return originalStr.trim();
//   }
  
//   console.log(bigStr("lorem ipsum")); 


// 3-masala


// function palindromArray(array) {
//   var reverse = array.split('').reverse().join('');

//   if (array === reverse) {
//     console.log(" To'g'ri");
//   } else {
//     console.log(" Xato");
//   }
// }

// palindromArray("non"); 

// 4-masala

// function findOldestPerson(arr) {
//     let oldestPerson = arr[
//         {
//             id: 1,
//             ism: "Salohiddin",
//             name: 17,
//         },

//         {
//             id: 2,
//             ism: "Mirjalol",
//             name: 18,
//         },

//         {
//             id: 3,
//             ism: "Asrorxoja",
//             name: 17,
//         }
//     ];  

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i].age > oldestPerson.age) {  
//         oldestPerson = arr[i];  
//       }
//     }
  
//     console.log("Eng katta yoshli kishi:", oldestPerson.name);
//   }
  
