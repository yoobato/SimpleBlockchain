// Class는 JS로 변환됨. (interface는 안됨.)
// JS에서는 public, private을 구분하지 않음.
class Human {
  public name: string;
  private age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const yoobato = new Human("Yoobato", 31, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(yoobato));

// 아래처럼 해주지 않으면 이 파일을 모듈로 인식하지 않는다. Typescript 버그인듯.
export {};
