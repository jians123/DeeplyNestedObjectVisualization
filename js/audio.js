var audio = document.getElementById('audio')
var mark_ele = document.querySelector('.mark_ele')
var mark = document.querySelector('.mark')
mark_ele.onclick = function () {
    audio.play()
    mark.style.display = 'none'
}
