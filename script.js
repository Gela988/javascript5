"use strict";

// 1 დავალება 

 let numbers  = [5, 25, 89, 120, 36];
 numbers.unshift('javascript', 'python')
 numbers.push('html', 'css')
 console.log(numbers.length)
 numbers.shift();
 numbers.pop();
 console.log(numbers);

// ------------------------------------------------------------------


// 2 დავალება 
let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
console.log(fruits.length);
fruits.push('ვაშლი','ანანასი');   
fruits.unshift('საზამთრო');   
console.log(fruits.length);
fruits.splice(2,0, 'მანგო')
fruits.shift();
fruits.pop();
console.log(fruits.length);
console.log(fruits);

// ------------------------------------------------------------------------


// 3 დავალება 

let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newarray = array.map(function(item){
    return item % 3;
});
console.log(newarray);

// -----------------------------------------------------


//  4 დავალება 

let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let result = array.filter(item=> typeof(item) == 'Number');
console.log(result);

// -----------------------


// 5 დავალება

let languages = ['html', 'css', 'javascript', 'python','php'];
let result = languages.filter(item => item.length >3 );
console.log(result);

// ---------------------------------------------


//  6 დავალება

let array= ['academy', 'of', 'digital', 'industries']

let newArray = array.reduce((sentence, word)=>sentence+ word + ' ',"")
console.log(newArray)

// -----------------------------------


//  7 დავალება

let item = [12, 'google', 32, 'null', 'yahoo', 25];
console.log(typeof(item[0])=='number')

let newItem = item.map(item=>
    (typeof(item)=="number")? item*item:
    (typeof(item)=="string")? item.toUpperCase():
    item
)
console.log(newItem)

// --------------------------------


// 8 დავალება

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newwords = words.filter(item => item.includes('M'));
console.log(newwords);

// ----------------------------------------------