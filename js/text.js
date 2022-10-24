let text = 'Reykjavik'
let text2 = document.querySelector(".text2")
let textArr = text.split('')
let textIndex = 0;
let textString = '';
let timer = setInterval(function () {
    if(textIndex >= textArr.length){
        textString = ''
        textIndex = 0
    }
    textString = textString + textArr[textIndex]
    textIndex ++
    text2.innerHTML = textString
},500)
