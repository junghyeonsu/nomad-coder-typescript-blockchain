const name = "Hyeon-su",
    age = 24,
    gender = "male";

const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you're age is ${age}, gender is ${gender}`);
};

// ? 는 선택을 주는거임 넣든 말든
// const sayHi = (name, age, gender?) => {
//     console.log(`Hello ${name}, you're age is ${age}, gender is ${gender}`);
// };

sayHi(name, age, gender);

export {};