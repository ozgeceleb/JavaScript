let names = Array()

console.log(names)

let names2 =['Ozge', 'Celebi', 28, 1993]

console.log(names2.length)


const fruits = ['Apple','Orange','Banana','Strawberry']

let firstFruit =fruits[0]
let secondFruit=fruits[1]

let LastIndex =fruits.length-1

const countries =[
    'Kenya',
    'Germany',
    'Poland'
]

let change = countries.length-1
countries[change]='Korea'

console.log(countries.join('#'))

console.log(countries.slice(0,1))

countries.splice(1,2, 'Turkey', 'Poland')

countries.splice //istediğimiz indexleri kaldırıp yerine yenilerini ekler

console.log(countries)

countries.push('Norveç') //son değere ekleme yapar

console.log(countries)

countries.pop() // son değeri kaldırır
console.log(countries)

countries.shift() //ilk değeri kaldırır
console.log(countries)

countries.unshift('ilk eleman') //ilk indexe değer eklemek
console.log(countries)


countries.reverse() //tersine sıralar
console.log(countries)

let numbers = [1,8,7,5] //[1, 10, 8, 7, 5]
console.log(numbers)

let dizi = [1,2,3, [1,2] ,'Ahmet','Mehmet']

console.log(dizi[3][1]) // console output -> 2




