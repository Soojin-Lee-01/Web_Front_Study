// input value 설정 및 가져오기
function getValue(){
    let value = $('input').val()
    alert(value)
}
function setValue(){
    $('input').val('다른 글자로 설정!')
}


function changeCssJS(){
    let span = document.querySelector('span')
    span.style = 'font-size:20px; color:red;'
}
function changeCssJQ(){
    $('span').css('font-size', '40px')
    $('span').css('color', 'blue')

}

// attr()
function changeAttrJS(){
    let a = document.querySelector('a')
    a.setAttribute('href', 'http://www.naver.com')
}
function changeAttrJQ(){
    $('a').attr('href', 'https://www.daum.net')
}

// text()
function changeTextJS(){
    let p = document.querySelector('.p-text')
    p.innerText = 'js로 바꾼 내용입니다.'
}
function changeTextJQ(){
    $('.p-text').text('jq로 바꾼 내용입니다.')
}

// html()
function changeHtmlJS(){
    let p = document.querySelector('.p-html')
    p.innerHTML = '<em>javascript</em>'
}
function changeHtmlJQ(){
    $('.p-html').html('<h2>jQuery</h2>')
}

// append()
function appendJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.classList.add('red')
    li.innerText = "맨 마지막 자식으로 추가된 li (js)"
    ul.append(li)
}
function appendJQ(){
    $('.colors').append('<li>마지막 자식으로 추가된 li (jquery)</li>')
}

// prepend()
function prependJS(){
    let main = document.querySelector('.colors')
    let test = document.createElement('li')
    test.innerText = "맨 앞 자식으로 추가된 li (js)"
    main.prepend(test)
}
function prependJQ(){
    $('.colors').prepend('<li>맨 앞 자식으로 추가된 li (jquery)</li>')
}

// after()
function afterJS(){
    let temp = document.querySelector('.green')
    let test = document.createElement('li')
    test.innerText = "형제 요소의 뒤에 추가된 li (js)"
    temp.after(test)

}
function afterJQ(){
    $('.green').after("<li>형제 요소의 뒤에 추가된 li (jQuery)</li>")
}

// before()
function beforeJS(){
    let temp = document.querySelector('.green')
    let test = document.createElement('li')
    test.innerText = "형제 요소의 앞에 추가된 li (js)"
    temp.before(test)
}
function beforeJQ(){
    $('.green').before("<li>형제 요소의 앞에 추가된 li (jQuery)</li>")
}

// remove()
function removeJS(){
    let li2 = document.querySelector('.li2')
    li2.remove()
}
function removeJQ(){
    $('.li2').remove()
}

// empty()
function emptyJS(){
    let nums = document.querySelector('ul.nums')
    nums.innerHTML = ""
}
function emptyJQ(){
    $('ul.nums').empty()
}

function findParent(){
    console.log($(`.child2`).parent())
}
function findParents(){
    console.log($(`.child2`).parents())
}
function findNext(){
    console.log($(`.child2`).next())
}
function findPrev(){
    console.log($(`.child2`).prev())
}
function findChildren(){
    console.log($('.parent').children())
}

// 클래스 조작하기
function addClass(){
    $('#hi').addClass('fs-50')
}
function removeClass(){
    //$('#hi').removeClass('color-blue')
    $('#hi').removeClass()
}
function hasClass(){
    console.log($('#hi').hasClass('fs-50'))
}
function toggleClass(){
    $('#hi').toggleClass('bg-pink')
}
