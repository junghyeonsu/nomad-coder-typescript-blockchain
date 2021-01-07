interface Human {
    name:string,
    age:number,
    gender:string
};

const person = {
    name : "정현수",
    age : 25,
    gender : "female"
};

const sayHi = (person: Human) : void => {
    console.log(`Hello ${person.name}, you're age is ${person.age}, gender is ${person.gender}!`);
};

sayHi(person);

export {};