function fullName(){
    console.log("Özge Çelebi")
}
fullName()

function fullName2 (name, lastName){

    console.log(name + " " + lastName)
}
fullName2("Ozge", "Celebi")

function addNumbers(num1, num2){

    console.log(num1+num2)
}
addNumbers(10,22)

function AreaOfRectangle(uzunluk, genislik) {

    console.log("Area of Rectangle = ",uzunluk*genislik);
}

AreaOfRectangle(10,22)

//Bir dikdörtgenin çevresi şu şekilde hesaplanır: çevre= 2x(uzunluk + genişlik). 
//PerimeterOfRectangle'ı hesaplayan bir fonksiyon yazın.

function PerimeterofRectangle(uzunluk,genislik){

    console.log("Perimeter of Rectangle = ",(uzunluk+genislik)*2)
}
PerimeterofRectangle(10,20)


//Dikdörtgenler prizmasının hacmi şu şekilde hesaplanır: hacim = uzunluk x genişlik x yükseklik.
// VolumeOfRectPrism'i hesaplayan bir fonksiyon yazın.

//Anonymous Function

function VoluneOfRectPrism (length, width, height){

    console.log("Volume Of RectPrism =" , length*width*height)
}
VoluneOfRectPrism(10,20,30)

//Dairenin alanı şu şekilde hesaplanır: alan = π x r x r. AreaOfCircle'ı hesaplayan bir fonksiyon yazın


const AreaOfCircle = (pi,r) => {
    return pi*r*r
}
console.log(AreaOfCircle(3.14,2))

//Hız, hareketli bir nesnenin kat ettiği toplam mesafenin, alınan toplam süreye bölünmesiyle hesaplanır. 
//Hareket eden bir cismin hızını, yani hızı hesaplayan bir fonksiyon yazınız.

const SpeedOfLight = (m,s) => {
    return m/s
}
console.log(SpeedOfLight(20,5))


//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter,
// Spring or Summer.

function checkSeason(month){
    if(month==1,2,3){
        return "Winter"
    }else if(month ==4,5,6){
        return "Spring" 
    }else if(month==7,8,9){
        return "Summer"
    }else(month==10,11,12)
        return "Autumn"
    }

console.log(checkSeason(2))

//Math.max en büyük bağımsız değişkenini döndürür.
// Math.max yöntemini kullanmadan üç bağımsız değişken alan ve bunların maksimum
// değerini döndüren bir findMax işlevi yazın.

function Maximum(){
    let maxNum = 0;
   for(let i =0 ; i<arguments.length ; i++){
    if(arguments[i] > maxNum){
        maxNum=arguments[i]
    }
}
   return maxNum
 
}   
console.log(Maximum(30,40,50));

//Lineer denklem şu şekilde hesaplanır: ax + by + c = 0. 
//Bir lineer denklemin değerini hesaplayan bir fonksiyon yazın, solventLinEquation.

(function(){
console.log("He yo !")
})()
 

