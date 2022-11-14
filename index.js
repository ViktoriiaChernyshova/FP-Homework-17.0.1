const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
  
// 1. Знайти суму та кількість позитивних елементів.

let positiveNum = array.reduce(
    (accum, number) => {
        if (number > 0) {
            accum.amountNumbers++;
            accum.sumNumbers += number;
        }
        return accum;
    },
    {sumNumbers: 0, amountNumbers: 0}
);
console.log(positiveNum);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.

let minNum = array.reduce(
    (accum, number, index) => {
        accum.minNumber = Math.min(accum.minNumber, number);
        accum.numbNumber = array.indexOf(accum.minNumber);
        return accum;
    },
    {minNumber: 0, numbNumber: 0}
);
console.log(minNum);
  
// 3. Знайти максимальний елемент масиву та його порядковий номер.

let maxNum = array.reduce(
    (accum, number, index) => {
        accum.maxNumber = Math.max(accum.maxNumber, number);
        accum.numbNumber = array.indexOf(accum.maxNumber);
        return accum;
    },
    {maxNumber: 0, numbNumber: 0}
);
console.log(maxNum);

// 4. Визначити кількість негативних елементів.

let negativeNumbers = array.reduce(
    (accum, number) => {
        if (number < 0) {
            accum++;
        }
        return accum;
}, 0);
console.log(negativeNumbers);
  
// 5. Знайти кількість непарних позитивних елементів.

let countOddNumbers = array.reduce(
    (accum, number) => {
        if (number > 0 && number % 2 === 1) {
            accum++;
        }
        return accum;
    }, 0);
console.log(countOddNumbers);
  
// 6. Знайти кількість парних позитивних елементів.

let countEvenNumbers = array.reduce(
    (accum, number) => {
        if (number > 0 && number % 2 === 0) {
            accum++;
        }
        return accum;
    }, 0);
console.log(countEvenNumbers);
  
// 7. Знайти суму парних позитивних елементів.
let sumEvenNumbers = array.reduce(
    (accum, number) => {
        if (number > 0 && number % 2 === 0) {
          accum += number;
        }
        return accum;
    }, 0);
console.log(sumEvenNumbers);
  
// 8. Знайти суму непарних позитивних елементів.

let sumOddNumbers = array.reduce(
    (accum, number) => {
        if (number > 0 && number % 2 === 1) {
            accum += number;
        }
    return accum;
    }, 0);
console.log(sumOddNumbers);
  
// 9. Знайти добуток позитивних елементів.

let multNumbers = array.reduce((accum, number) => {
    if (number > 0) {
        accum *= number;
    }
    return accum;
}, 1);
console.log(multNumbers);

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.

let maxNumber = array.reduce((acum, number) => (number < acum) ? acum : acum = number, 0)
console.log(maxNumber);
let obnull = array.map(number => (number === maxNumber ? number : 0));
console.log(obnull);