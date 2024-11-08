/* 1. 태그 내부 내용 */
/*
- innerText
- textContent
- innerHTML
*/

let div1 = document.getElementById('div1')
div1.innerText = '     여기는 <b>첫번째</b> 태그입니다.&hearts;     /'
// 2칸이상의 공백문자 제거, 앞뒤로 공백문자 제거
console.log(div1.innerText)

div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다.&hearts;'

div1.textContent = '     여기는 <b>첫번째</b> 태그입니다.&hearts;     /'
console.log(div1.textContent)

/* 2. 속성에 접근 */
/*
- 요소.속성명
- getAttribute(): 속성값 가져오기
- setAttribute(): 속성값 설정하기
*/

// pooh, naver 아이디
let naver = document.getElementById('naver')
console.log(naver)
// naver.setAttribute("속성이름", "바꿔줄 속성값")
naver.setAttribute("href", "http://www.google.com")
console.log(naver.href)
console.log(naver.getAttribute('href'))

console.log(document.querySelector('#pooh').src)
document.querySelector('#pooh').setAttribute("alt", "푸 사진임")
document.querySelector('#pooh').alt = "푸사진"

console.log(pooh.alt)


/* 3. CSS 변경 */

let title = document.querySelector('h1')
let names = document.querySelectorAll('li')

// console.log(title)
// console.log(names)

// 배경색을 분홍색, 글자색 흰색, 글씨크기 1.3rem
for (let so of names) {
    // so.style.color = 'white'
    // so.style.backgroundColor = 'pink'
    // so.style.fontSize = '1.3rem'
    // 클래스 추가!
    so.classList.add('friends')
}

// 클래스 이름을 추가
title.classList.add('add-h1')
console.log(title.classList)
// 있던 것이 다시 없어짐
title.classList.remove('add-h1')
// 없으면 있게만들어주고, 있으면 삭제 -> 현재 상태와 반대로
title.classList.toggle('add-h1')

// 'add-h1'가 있는건지 없는건지 알려준다.
console.log(title.classList.contains('add-h1'))
console.log(title.classList)

/* 4. 부모, 자식, 형제 노드 찾기 */
let friends = document.querySelector('#friends') 
let tigger = document.querySelector('#tigger')

console.log('-- 자식 노드 접근 --')
// 배열 형태로 가져옴
console.log(friends.children)
console.log(friends.children[0])
//console.log(friends)
//console.log(tigger)

console.log('-- 부모 노드 접근 --')
// 배열형태가 아닌 요소 자체를 가져옴
console.log(tigger.parentNode)

console.log('-- 형제 노드 접근 --')
// 이전 형제
console.log('이전 형제', tigger.previousElementSibling)
console.log('다음 형제', tigger.nextElementSibling)

/* 5. 노드 생성, 추가, 삭제 */
let container = document.querySelector('.container')
console.log(container)

// 요소 생성
const p = document.createElement('p')
p.innerText = "새로 추가된 p"
p.style.fontWeight = "700"
p.style.background = "red"
p.id = "append-p"

// 요소 추가
console.log(p)

// 선택된 요소(container)의 맨 뒤 자식요소로 추가됨
container.append(p)


let p2 = document.createElement('p')
let p3 = document.createElement('p')

p2.innerText = "p2"
p2.className = "p-2"
//p2.classList.add('p-2')

p3.innerText = "p3"
p3.className = "p-3"
//p3.classList.add('p-3')

//container.append(p2)
//container.appendChild(p3)

container.append(p2, p3, "안녕하세요")

// prepend(): 선택된 요소의 맨 앞 자식으로 추가
// li 태그를 만들고, "캉가", friends 클래스 추가
let li = document.createElement('li')
li.innerText = "캉가"
li.classList.add('friends')

friends.prepend(li)

console.log(title)


// before()
let h3 =  document.createElement('h3')
h3.innerText = 'h3 tag'
title.before(h3)

// after()
let h2 = document.createElement('h2')
h2.innerText = 'h2 tag'
title.after(h2)

// 요소 삭제! > remove(), removeChild()
let firstLi = document.querySelector('li')
console.log(firstLi)
let ul = firstLi.parentElement

//firstLi.remove() // 선택된 요소가 삭제
// 삭제할요소.remove()

ul.removeChild(firstLi)
// 삭제할요소.removeChild()

// <div class = "container"></div>

let parent = document.querySelector('.container')

let div = document.createElement('div')
parent.append(div)

let image = document.createElement('img')
image.src = "../image/pocha.png"
image.alt = "add"
image.style.width = '300px'
let span = document.createElement('span')
span.innerText = "포차코"
div.append(image, span)




