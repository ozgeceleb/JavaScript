//Declare a function fullName and it print out your full Name

function fullName(){
console.log("Özge")
}
fullName()

//Declare a functiın fullName and now it takes firstName, lastName as a parameter and it returns your full- name

function fullLName(firstName, lasstName){

    return firstName+ " " +lasstName;
}
const result = fullLName("Özge", "Celebi");
console.log(result);

//Declare a function addNumbers and it takes two parameters and returns sum

function addNumbers(num1, num2){
    return num1+ num2;
}
const sum = addNumbers(10,20);
console.log(sum)


//A perimeter of a rectangle is calculated as follows : perimeter = 2x(length +width). Write a function which calculates 
//perimeterOfRectangle

function perimeterOfRectangle(length , width){
    return 2*(length+width)
}
const rectangleResult= perimeterOfRectangle(10,20);
console.log(rectangleResult)


//A volume of a rectangular prism is calculated as follows : volume =length xwidthx height. Write a function which
//calculates volumeOfRectPrism

function volumeOfRectPrism(length, width,height){
    return length*width*height
}

const rectPrismResult= volumeOfRectPrism(10,20,30);
console.log(rectPrismResult)


//Area of circle is calculated as follows : area= pi*r*r. Write a function which calculates areaOfCircle

function areaOfCircle(pi,r){
    return (pi*r*r)
}
console.log(areaOfCircle(3.14,3))

//Circumference of a circle is calculated as follows : circumference =2pi*r. Write a function which calculates circumOfCircle

function circumOfCircle (pi,r){
    return 2*(pi*r)
}
console.log(circumOfCircle(3.14,3))


//Density of a substance is calculated as follows : density = mass/volume. Write a function which calculate density

function density (mass, volume) {
    return mass/volume
}
console.log(density(10,2))


//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time
//taken. Write a function which calculates a speed of a moving object , speed

//Expression Function
const speed =function(distance,time){
    return distance/time
}
console.log(speed(6,3))

//Weight of a substance is calculated as follows : weight = mass* gravity . Write a function which calculates weight


//Allow Function
const substanceWeight =(mass,gravity) => {
    return mass*gravity
}

console.log(substanceWeight(2,3))

//Temparature in oC can be converted to Of using this formula : Of =(Oc* 9/5). Write a function which convert oC to oF
//convertCelsiusToFahrenheit

const convertCelsiusToFahrenheit = (c) => {
    return (c*9/5)+32
}
console.log(convertCelsiusToFahrenheit(10))

//


