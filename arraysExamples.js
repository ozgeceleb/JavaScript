//Declare an empty array
let emptyArray = []
console.log(emptyArray)

//Declare an array with more than 5 number of elements
let company = ['Java','JavaScript','API','Jmeter','Cypress','Postman']

//Find the length of your array
company.length
console.log(company)

//Get the first item, the middle item and last item of the array
let firstItem = company.slice(0,1)
console.log(firstItem)

let middleItem =company.slice(2,3)
console.log(middleItem)

let lastIndexItem =company.slice(5,6)
console.log(lastIndexItem)


//Declare an array called 'mixedDataTypes', put different data types in the array and find the length of the array.
//The array size should be greater than 5

let mixedDataTypes = [1,2,3, [9,8,7], 'Ali','Ayşe','Mehmet']

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft , Apple, IBM, Oracle
// and Amazon


let itCompanies =['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)


//print the number of companies in the array
console.log(itCompanies.length)


//Print the first company, middle and last company

console.log(itCompanies.slice(0,1))
console.log(itCompanies.slice(2,3))
console.log(itCompanies.slice(6,7))


//Print out each company


   for (let i = 0; i < itCompanies.length; i++) {
   console.log(itCompanies[i]);
 }

 //Change each company name to uppercase one by one and print them out
 
 for (let i =0 ; i< itCompanies.length ; i++) {

   console.log(itCompanies[i].toUpperCase())

 }

 //Print tne array like as a sentence : Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies


 itCompanies.push('are big IT companies')
 console.log(itCompanies.toString())


 //Check if a certain company exists in the itCompanies array. If it exist return the company else return a company 
 //is not found


 if(itCompanies.includes('Facebook','Google','Microsoft','Apple','IBM','Oracle')){

   console.log('exist in the itCompinies')
 
 }else{
   (console.log('not found'))
 }

//Filter out companies which have more than one 'o' without the filter method


for(let i =0 ; i<itCompanies.length ; i++){
   if(itCompanies[i].includes('oo')){
   console.log(itCompanies[i])
}
}


//Sort the array using sort()method

console.log(itCompanies.sort())


//Reverse the array using reverse()method

console.log(itCompanies.reverse())

//Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3))

//Slice out the last companies from the array

console.log(itCompanies.slice(5,8))


//Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(3,6))

//Remove the first It company from the array

itCompanies.shift()
console.log(itCompanies)


//Remove the middle It company or companies from the array
const deletedItem = 'Google';
const index = itCompanies.indexOf(deletedItem);
if(index > -1) {
    itCompanies.splice(index, 1);
}

console.log(itCompanies);

//Remove the last It company from the array

itCompanies.pop()
console.log(itCompanies)

//Remove all IT companies
itCompanies.splice(0,8)
console.log(itCompanies)


const ages =[19,22,19,24,20,25,26,24,25,24]

//Sort the array and find the min and max age

console.log(ages.sort())
const minAge =Math.min(...ages);
console.log(minAge)

const maxAge =Math.max(...ages)
console.log(maxAge)

//Find the median age(one middle item or two middle items divided by two)
const middleItemm =(Math.floor(ages.length/2))
console.log(middleItemm)

const medianAge =(ages[middleItemm])
console.log(medianAge)

//Find the average age

const averageAge = ages.reduce((a,b) => a + b) / ages.length
console.log(averageAge)







