const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi("Yoobato", 31, "male"));

// 아래처럼 해주지 않으면 이 파일을 모듈로 인식하지 않는다. Typescript 버그인듯.
export {};
