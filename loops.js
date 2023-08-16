for(let i =0; i<= 100 ;i++){

    console.log('i' , i)
}

for (let i =0 ; i<= 5 ; i++){
    console.log(`${i}* ${i} = ${i*i}`)
}

//BackTick için -> Altgr + ','

const names =['Tayfun','Mehmet','Gökhan','Ali','Murat']

for (let i=0 ; i<=names.length; i++) {
    console.log(names[i])
}

let numbers = [5,10,15]
let sum =0

for (let i =0 ; i<numbers.length ; i++){
    sum+=numbers[i]
    
}
console.log(sum) // --> 30


let countries =['Turkey','Germany','China','USA']
let newCountries = []

for(let i=0 ; i<= countries.length ; i++){
    newCountries.push(countries[i])
}
console.log(countries)
console.log(newCountries)


//toLocaleUpperCase -> Türkçe büyük İ gibi durumlarda kulllanabiliriz
const sayilar=[1,2,3,4,5]
for (const num of sayilar){

    console.log(num)
}

let i =0;
do{
    console.log(i)
    i++
}while(i<=5)


let x =7
while(x< names.length){
    console.log('isim',names(i))
    i++
}

for(let i =0 ; i<= 5 ; i++) {
    if(i ==3){
        break
    }
    console.log(i)
}

for(let i =0 ; i<=4 ; i++){
    if(i ==3 ){
    continue
    }
    console.log(i) //-> 0,1,2,4
}

