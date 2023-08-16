const countries =[
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs =[
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express','React','Node']

//for(let i =0 ; i<=10 ; i++)

//console.log(i)

i=0;
while(i<=10){
    console.log(i)
    i++
}

let j =0
while (j<=7){
    console.log("#")
    j++
    
}

//Write a loop that makes the following pattern using console.log():

/*
#
##
###
####
#####
######
#######
*/

for(let i =1 ; i<=7 ; i++){
   let row = "";

for(let j =1 ; j<=i ; j++ ){

    row += "#";
}
console.log(row)
}


for(let i = 0 ; i<=10 ; i++){

    console.log(i+"*"+i+"="+(i*i))

}