// interface는 Javscript로 변환되지 않음.
interface Human {
  name: string,
  age: number,
  gender: string,
}

const person = {
  name: "Yoobato",
  age: 31,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

// 아래처럼 해주지 않으면 이 파일을 모듈로 인식하지 않는다. Typescript 버그인듯.
export {};
