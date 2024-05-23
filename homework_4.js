const numberDeterminant = (i) => {
  let a = " ";
  let b = "є простим числом";
  for (let x = 2; x < i; x++) {
    if (i % x !== 0) continue;
    a = " не ";
  }
  if (i === 0) {
    b = "нейтральний елемент ";
  }
  if (i === 1) {
    b = "натуральне число ";
  }
  console.log(`Число ${i}${a}${b}`);
};
numberDeterminant(0); // нейтральний елемент
numberDeterminant(1); // натуральне число
numberDeterminant(2); // є простим числом
numberDeterminant(3); // є простим числом
numberDeterminant(4); // не є простим числом

const howManyThoroughNumbers = (n) => {
  const thoroughNumbers = (i) => {
    const arraySum = (array) => {
      let sum = 0;
      for (let el = 0; el < array.length; el++) {
        sum += array[el];
      }
      return sum;
    };
    let nomberS = [];
    for (let x = 1; x < i; x++)
      if (i % x === 0) {
        nomberS.push(x);
      }
    if (arraySum(nomberS) === i) {
      console.log(`Число ${i} досконале;`);
    }
  };
  for (let x = 1; x <= n; x++) {
    thoroughNumbers(x);
  }
};

howManyThoroughNumbers(10000); //Число 6 досконале; Число 28 досконале; Число 496 досконале; Число 8128 досконале;

const firTree = (i) => {console.log("   " + i + "   " + "\n  ***  " + "\n ***** " + "\n*******");};
firTree(7);
const firTree2 = (i) => console.log(`   ${i}    \n  ***    \n *****    \n*******`)
firTree2(7);

//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.
//Вам необхідно написати програму, яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N, які є досконалими числами.
//Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки. Уся ялинка має бути реалізована одним рядком:

