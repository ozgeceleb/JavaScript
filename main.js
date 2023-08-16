let text = 'I love teaching and empowering people. I teach HTML, CSS, React, Python';


let arr =text.split(" ")

console.log(arr)

let kelimesayisi = arr.length
console.log(kelimesayisi)

const shoppingCart =['Milk','Coffee','Tea','Honey']

if (!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}else{
    console.log('it has not been already added')
}

if(!shoppingCart.includes('sugar')){

    shoppingCart.push('Sugar')
}else{
    console.log('it has not been already added')
}

// ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']


console.log(shoppingCart)
