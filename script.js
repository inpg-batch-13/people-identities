
// function min(arr) 
// {
//   return arr.reduce(function (x, y)  
//   {
//     return (x < y ? x : y)
//   } ) 
// }

// // maximum array
// function max(arr){
//   return arr.reduce(function (x, y){
//     return (x > y ? x : y)
//   } ) 
// }

// // mean (rata-rata) array
// function mean(arr){
//   var jumlah = 0
//   for (i = 0; i < arr.length; i++){
//     jumlah += arr[i]
//   }
// return jumlah / arr.length
// }

// // odds array
// function odds(arr){
// return arr
// .filter (function(m){
//   return m % 2 === 1
// }).join(',')
// }

// // evens array
// function evens(arr){
// var even = arr.filter (function getevens(n){
//   return n % 2 === 0
// })
// return even.join(',')
// }

// function numberProcessing(arr) {
//   return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
// }

// console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]))
// // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"

// var numbers = [1, 3, 4, 7, 9]
// var numberGroup = [[0,0], [2,3], [4,5]]

// var personAges = [
//   ['rahmat', 20], 
//   ['daniel', 23], 
//   ['felisha', 17]
//   ]

// for (var i= 0; i < personAges.length; i++)

// console.log('Hi saya', personAges[i][0], 'berumur', personAges[1])

// // soal 
// // Hi, saya rahmat berumur 20
// // Hi, saya daniel berumur 23
// // Hi, saya felisha berumur 17

var people = [
  [1, 'Dimitri', 'Hacktiv8'],
  [2, 'Dhani', 'Hacktiv8'],
  [3, 'Icha', 'Hacktiv8']
];

console.log(people)

for (var i=0; i < people.length; i++)

console.log ('ID:', people[i][0], 'Name:',people[1][1], 'Company:', people[i][2] )

// your code here
// ID: 1 Name: Dimitri Company: Hacktiv8
// ID: 2 Name: Dhani Company: Hacktiv8
// ID: 3 Name: Icha Company: Hacktiv8