// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// // import coffeeStock from "./state.js";

// const makeCoffee = (type, miligrams) => {
//     if(coffeeStock[type] >= miligrams){
//         console.log("Kopi berhasil dibuat");
//     }else{
//         console.log("Biji kopi habis!");
//     }
// }

// makeCoffee("robusta", 80);
// console.log(isCoffeeMachineReady);
// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// const state = {
//     stock: {
//         coffeeBeans: 250,
//         water: 1000,
//     },
//     isCoffeeMachineBusy: false,
// }
 
// const checkAvailability = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!state.isCoffeeMachineBusy) {
//                 resolve("Mesin kopi siap digunakan.");
//             } else {
//                 reject("Maaf, mesin sedang sibuk.");
//             }
//         }, 1000);
//     });
// };
 
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         state.isCoffeeMachineBusy = true;
//         setTimeout(() => {
//             if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
//                 resolve("Stok cukup. Bisa membuat kopi.");
//             } else {
//                 reject("Stok tidak cukup!");
//             }
//         }, 1500);
//     });
// };
 
// const brewCoffee = () => {
//     console.log("Membuatkan kopi Anda...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kopi sudah siap!")
//         }, 2000);
//     });
// };

// const boilWater = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Memanaskan air...");
//         setTimeout(() => {
//             resolve("Air panas sudah siap!");
//         }, 2000);
//     })
// }
 
// const grindCoffeeBeans = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Menggiling biji kopi...");
//         setTimeout(() => {
//             resolve("Kopi sudah siap!");
//         }, 1000);
//     })
// }
 
// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then(value => {
//             console.log(value);
//             const promises = [boilWater(), grindCoffeeBeans()];
//             return Promise.all(promises);
//         })
//         .then((value) => {
//             console.log(value)
//             return brewCoffee();
//         })
//         .then(value => {
//             console.log(value);
//             state.isCoffeeMachineBusy = false;
//         })
//         .catch(rejectedReason => {
//             console.log(rejectedReason);
//             state.isCoffeeMachineBusy = false;
//         });
// }
 
// makeEspresso();

import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum);