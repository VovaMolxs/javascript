"use strict"

let number = 5;
const number2 = 2;

number = 10;

console.log(number); 

const object = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(object.name);

let arr = ['Vova', 'Kharchenko', 28];

console.log(arr[0]);

//let result = confirm('Are you here?');
//alert(result);
//typeof() - определяет что за тип данных

//const answer = prompt("Вам есть 18?");
//alert(answer);

//const answers = [];
//answers[0] = prompt('Что добавим в массив?');
//answers[1] = prompt('Что добавим в массив 2?');
//answers[2] = prompt('Что добавим в массив 3?');
//alert(answers);

//интрполяция 

//const category = "toys";
//alert(`https://somerul.com/${category}`);


//инкримент и дикремент

let inc  = 10,
    decr = 10;

inc++;
++inc;
decr--;
--decr;

alert(inc + " and " + decr);