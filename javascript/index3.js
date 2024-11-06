/**
 * 함수
 * - 특정 작업을 수행하기 위해 설계된 코드 집합
 * - 함수의 선언 구조
 * - 키워드 : function
 * - 함수의 이름 : cameCase로 함수의 이름 작성
 * - (매개변수) : 함수 내부에서 사용할 변수.
 * - {스코프} : 함수의 내부 코드
 * 함수 선언문, 함수 표현식
 * - 함수 표현식 : 변수에 함수를 저장
 * - 함수 선언문 : 명시적 함수 선언
 */

helloWorld()
console.log('선언되기 전')

function helloWorld(){
    console.log("hello world 1")
}

helloWorld()

function helloWorld2() {
    // return 키워드
    // 함수 내부 코드의 최종 결과값
    return 'hello World 2'
    console.lof('리턴 아래입니다...')
}

console.log(helloWorld2())

// helloWorld3(), err! 선언되기 전에 호출 불가능
const helloWorld3 = function (){
    console.log('hello world 3')
}

helloWorld3()

// helloWorld4(), err! 선언되기 전에 호출 불가능
const helloWorld4 = () => {
    console.log('hello world 4')
}

helloWorld4()

// 매개변수가 있는 함수 만들기
// 1. 매개변수 1개, 함수 선언문
function sayHello1(text){
    return text
}

console.log(sayHello1("안녕!"))

// 2. 매개변수 2개, 함수 선언문
function sayHello2(text, name){
    return `${text}! ${name}`
}

console.log(sayHello2("안녕", "soojin"))


// 3. 매개변수 2개, 함수 표현식
// 내부 스코프 console.log로 작성
let sayHello3 = function(text, name) {
    console.log(`${text}! ${name}`)
}

sayHello3("안녕", "나 자신")

// 4. 매배견수 2개, 화살표 함수
let sayHello4 = (text, name) => {
    return `${text}! ${name}`
}

console.log(sayHello4("안녕", "나의 자신"))

const sayHelloValue = sayHello4("hello", "soojin")
console.log(sayHelloValue)




