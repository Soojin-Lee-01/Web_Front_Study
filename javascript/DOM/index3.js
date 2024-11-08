/*
동작의 종류 : click, dbclick, scroll, change, submit, ...
- addEventListener(동작의 종류, function(){})
- <태그 onchange="함수의 이름()" onclick="함수의 이름()"></태그>
    on[동작의 종류] 속성으로 이벤트 제어 가능
*/

const btn1 = document.querySelector('.btn--black') 
const btn2 = document.querySelector('.btn--green') 
const btn3 = document.querySelector('.btn--blue') 
const btn4 = document.querySelector('.btn--red') 

// btn1.addEventListener("동작의 이름", function(){동작})
btn1.addEventListener("click", function(){
    console.log("버튼1이 클릭되었습니다!!")
    alert('버튼 1을 클릭하셨군요~!')
})

btn1.addEventListener("mouseover", function(){
    // this는 자기 자신을 가리킴
    // btn1.style.backgroundColor ="aqua"
    this.style.backgroundColor = "aqua"
})

// btn2를 눌렀을 때, div를 자식으로 붙이기
const container = document.querySelector('#container')

btn2.addEventListener('click', ()=>{
    let div = document.createElement('div')
    div.innerText = "hi!"
    div.style.backgroundColor = 'pink'

    container.append(div)    
})

// ** btn3
// 만들어진 div의 배경색 변경
// 함수 호출시 괄호 필수적으로 생략해야함, 괄호 작성시 즉시 호출
btn3.addEventListener('click', chagneColor)
//btn4.addEventListener('click', chagneColor)

function chagneColor() {
    const divs = document.querySelectorAll('#container div')
    // [div, div, div, ...]
    for (let i = 0 ; i < divs.length ; i++) {
        divs[i].style.backgroundColor = "skyblue"
    }
    divs[divs.length-1].style.backgroundColor = "yellow"
}

// ** btn4
// 배경색 노랑색으로 변경, 글자색 검정색으로 변경
btn3.addEventListener('click', chageBtnColor)
btn4.addEventListener('click', chageBtnColor)
function chageBtnColor() {
    this.style.backgroundColor = "yellow"
    this.style.color = '#000'
}

// ** btn5
// alert창 띄우기
function sayHi() {
    alert("안뇽!")
}

// =================================================
const btn = document.querySelector('button')
const input = document.querySelector('input')

/* 1. [클릭 이벤트] */
btn.addEventListener('click', function(event){
    // 클릭 이벤트에 관한 정보 (event 객체)
    console.log(event)

    // 어떤 요소가 클릭되었는지 확인 가능
    console.log(event.target)
})

// ==================================================
/* 2. [키보드 이벤트] */
input.addEventListener('keydown', function(event){
    // console.log(event)
    
    console.log(event.code)
    console.log(event.key)
    // 방향키 아래, 위, 왼쪽, 오른쪽
    if (event.code === "ArrowLeft") {
        console.log("왼쪽 방향키 눌렀습니다.")
    } else if (event.code === "ArrowRight") {
        console.log("오른쪽 방향키 눌렸습니다.")
    } else if (event.code === "ArrowUp") {
        console.log("위쪽 방향키 눌렸습니다.")
    } else if (event.code === "ArrowDown") {
        console.log("아래쪽 방향키 눌렸습니다.")
    } else {
        console.log("방향키가 아닌 키보드 누르는 중...")
    }
    
})

// ========================================================
/* 3. [scroll 이벤트] */
// console.log(window)


window.addEventListener('scroll', (event)=>{
    console.log(event)
    console.log(event.target)///
    console.log(scrollY)

    // scrollY가 844에서 div opacity가 1이 되도록
    if (scrollY > 844) {
        document.querySelector('.pos').style.opacity = "1"
    } 
})

// ================================
// 폼 이벤트
/* 4. [submit] */
const todoForm = document.querySelector('#todo-form') // form 태그
const todos = document.querySelector('.todos') // ul 태그

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    // 폼이 제출되는 것을 취소! 이벤트 전달을 막는 방법
    // 새로고침 막음
    
    console.log('submit')

    // 폼 내부의 input창 선택
    const todoInput = document.querySelector('input[name="todo"]')
    console.dir(todoInput) // 요소가 가지고 있는 데이터를 출력
    console.log(todoInput.value)

    const todo = todoInput.value.trim()

    // (!!!!) 공백으로 들어오는 문자는 추가되지 않도록
    if (todo != ""){
        // 선택된 ul 태그의 자식으로 <li>todo</li> 붙이기
        const li = document.createElement('li')
        li.innerText = todo
        todos.append(li)
    } else {
        alert("오늘의 할 일을 작성해주세요!! :)")
    }

    console.log('todo : ' + todo)

    todoInput.value = ""

})


// ===================================
/* 5. [change 이벤트] */

const chgInput = document.querySelector('#change-input')
chgInput.addEventListener('change',function(){
    console.log('changed!!!')
})

chgInput.addEventListener('input',function(){
    console.log('changing!!!')
    // input 창의 value에 변경이 발생되면 일어나는 이벤트

    let intro = document.querySelector('.intro')
    intro.innerHTML = this.value
})



