console.log(window)
console.log(document)

console.log($(window))
console.log($(document))


// click() : 클릭했을 때
// jQuery에서는 이벤트 이름으로 메서드가 존재함
// 요소.click(function(){}), 요소.hover(function(){}, funcion(){})
$('.p-msg').click(()=>{
    $('.p-msg').css('color', 'red')
})

// $('.num').click(function(){
//     //$('.num').css('color', 'blue')
//     $(this).css('color', 'green') // 자기 자신
// })

// $('.num').on('click', function(){
//     $(this).css('color', 'pink') 
// })

let num = document.querySelectorAll('.num')

for (let i = 0 ; i < num.length ;i++) {
    console.log(num[i])
    num[i].addEventListener('click', function(){
        this.style.color = 'blue'
    })
}

// hover(): 마우스를 올렸을 때, 마우스를 떼었을 때 정의
$('.div-hover').hover(
    function(){
        $(this).addClass('hover')
    }, 

    function(){
        $(this).removeClass('hover')
    }
)

$(window).scroll(function(){
    console.log('scrolling...')
})

$('.input-key').keydown(function(e){
    if (e.code === "ArrowLeft") {
        console.log("왼쪽 방향키 눌렸습니다.")
    } else if (e.code === "ArrowRight") {
        console.log("오른쪽 방향키 눌렸습니다.")
    } 
})

$('#todo-form').submit(function(e){
    // 기본동작 막기 (새로고침 방지)
    e.preventDefault()
    // input 태그에 작성한 글자 가져오기
    let text = $('input[name="todo"]').val()

    // li 태그를 만듦과 동시에 form아래의 ul태그에 붙여넣기
    $('.todos').append(`<li>${text}</li>`)

    // input 초기화
    $('input[name="todo"]').val('')
})




