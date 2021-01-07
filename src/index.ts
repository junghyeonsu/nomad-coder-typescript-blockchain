
// 인터페이스는 자바스크립트 코드로 변환이 안됨
// interface Human {
//     name:string,
//     age:number,
//     gender:string
// };

// 아주 가끔 자바스크립트로 인터페이스를 넣고싶으면, 클래스를 사용
class Human {
    public name     :string;
    public age      :number;
    public gender   :string;
    // 생성자라고 생각하면됨, 클래스가 생성될 때 마다 실행
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const hyeonsu = new Human("hyeonsu", 25, "male")

const sayHi = (person: Human) : void => {
    console.log(`Hello ${person.name}, you're age is ${person.age}, gender is ${person.gender}!`);
};

sayHi(hyeonsu);

export {};