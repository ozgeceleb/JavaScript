//Create an empty object called dog

const dog ={}

//Print the dog object on the console

console.log(dog)

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name="Labrador"
dog.legs="four"
dog.age=3
dog.bark="woof"

console.log(dog)

//Get name, legs, color, age and bark value from the dog object

//set new properties the dog object : breed, getDogInfo

dog.breed =""
dog.getDogInfo= ""

console.log(dog)


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//Find the person who has many skills in the users object

let maxSkills = 0
let person =""

for (const user in users ){
    const userSkills =users[user].skills

    if(userSkills.length>maxSkills){
        maxSkills=userSkills.length
        person=user
    }
}
console.log(`Kullanicilardan en çok yeteneğe sahip olan kişi ${person} , ve ${maxSkills} yeteneğe sahiptir`)

//Count logged in users , count users having greater than equal to 50 points from the following object

for (const user in users ){
    const userLogged =users[user].isLoggedIn

    if(userLogged){
        console.log(user)
    }
}

let points =50

for(const user in users){
    const fifthyPoint =users[user].points

    if(fifthyPoint>=points){
        console.log(` ${user} `)
    }
}
//Find people who are MERN stack developer from the users object

const Mern = ['MongoDB', 'Express', 'React', 'Node'];

for (const user in users) {
  const userSkills = users[user].skills;
  const isMernStackDeveloper = Mern.every(skill => userSkills.includes(skill));

  if (isMernStackDeveloper) {
    console.log(`${user} is a MERN stack developer`);

  }
}

//Set your name in the object without modifiyng the original users object

