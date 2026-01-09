//  TASK F   
function findResult(str) {
  for (let i = 0; i < str.length; i++) {

    if (str.indexOf(str[i]) !== i) {
      return true;
    }
  }
  
  return false;
}

const result = findResult("hello");
console.log(result);


    
    // task-E
       
// function reverseS (a) {
//   if(typeof a !=="string") {
//     console.log("please insert the string!")
//   }
//   else {
//     return a.split("").reverse().join("");
//  }

// }
// console.log(reverseS("abc"));




// function checkContent(a, b) {
//   if (a.length !== b.length) {
//     return false;
//   }

//   const sortA = a.split("").sort().join("");
//   const sortB = b.split("").sort().join("");

//   return sortA === sortB;
// }

// console.log(checkContent("abcdefgmolas", "adcbgefsalom"));
// console.log(checkContent("dghyuew", "udey3ieyd"));       




// TASK-c
// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   vaqt() {
//     const now = new Date();
//     return now.getHours() + ":" + now.getMinutes();
//   }

//   qoldiq() {
//     console.log(
//       `Hozir ${this.vaqt()}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola bor`
//     );
//   }

//   sotish(nomi, soni) {
//     this[nomi] = this[nomi] - soni;
//     console.log(`${soni}ta ${nomi} sotildi`);
//   }

//   qabul(nomi, soni) {
//     this[nomi] = this[nomi] + soni;
//     console.log(`${soni}ta ${nomi} qabul qilindi`);
//   }
// }

// const shop = new Shop(6, 8, 5);

// shop.qoldiq();
// shop.sotish("non", 30);
// shop.qabul("cola", 20);
// shop.qoldiq();


// TASK-B

// const text = "ad2a54y79wet0sfgbdfgsut984t7855555555555555557dfsjioidfduiu9";

// function countDigits(string) {
//   let count = 0;

//   for (const ele of string) {  
//     if (ele >= '0' && ele <= '9') { 
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countDigits(text)); 







// A - TASK
//        const harf = "a";
//        const soz = "Modernizatsiyalashtirilmaganlashtirilganlaringizdandir";
//   function countLetter(a, Modernizatsiyalashtirilmaganlashtirilganlaringizdandir) {
//   let count = 0;

//   for (const ele of Modernizatsiyalashtirilmaganlashtirilganlaringizdandir) {
//     if (ele === a) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countLetter(harf, soz));
// const c = "a";
// const d = "banana"
// function countNotLetter(a, banana) {
//   let count = 0;
  
//   for (const ele of d) {
    
//     if(ele !== a) {
//       count++
//     }
//   }
//   return count;
// }

// console.log(countNotLetter(c,d));





// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va koproq xato qiling", // 20-30
//     "o'zingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq", // 60+
// ] ;

// function maslahatBering (a, callback) {
//     if (typeof a !== "number") callback ("insert a number", null);
//     else if (a <= 20) callback (null, list[0]);
//     else if (a > 20 && a <= 30) callback (null, list[1]);
//     else if (a > 30 && a <= 40) callback (null, list[2]);
//     else if (a > 40 && a <= 50) callback (null, list[3]);
//     else if (a > 50 && a <= 60) callback (null, list[4]);
//     else  {
//         setInterval(function () {
//             callback (null, list[5])
//         }, 1000);
//     };  

// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     else{
//         console.log('javob:', data)
//     };
// })
// console.log("passed here 1");



// async function maslahatBering (a) {
//     if (typeof a !== "number") throw new Error ("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else  {
//           return new Promise((resolve, reject) => {
//          setTimeout(() => {
//          resolve(list[5]);
//      }, 5000);
// });

       
//     };  

// }
       //.THEN .CATCH
// console.log("passed here 0");
// maslahatBering(33)
// .then((err) =>{
//     console.log(err)
// })
// .catch((data) => {
//     console.log(data)
// })
// console.log("passed here 1");

             //async/await
// async function run() {
//     let javob = await maslahatBering(70);  // 1-await dan javob olmaguncha 2-awaitdan javob olmaydi qolganlari ham shunday
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();


             // CALLBACK FUNCTIONS
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va koproq xato qiling", // 20-30
//     "o'zingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq", // 60+
// ] ;

// function maslahatBering (a, callback) {
//     if (typeof a !== "number") callback ("insert a number", null);
//     else if (a <= 20) callback (null, list[0]);
//     else if (a > 20 && a <= 30) callback (null, list[1]);
//     else if (a > 30 && a <= 40) callback (null, list[2]);
//     else if (a > 40 && a <= 50) callback (null, list[3]);
//     else if (a > 50 && a <= 60) callback (null, list[4]);
//     else  {
//         setTimeout(function () {
//             callback (null, list[5])
//         }, 5000);
//     };  

// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     else{
//         console.log('javob:', data)
//     };
// })
// console.log("passed here 1");