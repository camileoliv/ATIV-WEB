const anime = document.querySelector ('#anime')
const bt1 = document.querySelector ('#yotsuba1')
const bt2 = document.querySelector ('#ena2')
const bt3 = document.querySelector ('#fuuka3')
const bt4 = document.querySelector ('#asagi4')
const bt5 = document.querySelector ('#yousuke5')
const bt6 = document.querySelector ('#jumbo6')


bt1.addEventListener ('click', primeiro)
bt2.addEventListener ('click', segundo)
bt3.addEventListener ('click', terceiro)
bt4.addEventListener ('click', quarto)
bt5.addEventListener ('click', quinto)
bt6.addEventListener ('click', sexto)


function primeiro() {
    anime.src = 'images/yotsubap.png'
}
function segundo() {
    anime.src = 'images/ena.jpg'
}
function terceiro() {
    anime.src = 'images/fuuka.jpg'
}
function quarto() {
    anime.src = 'images/asagi.jpg'
}
function quinto() {
    anime.src = 'images/yousuke.jpg'
}
function sexto() {
    anime.src = 'images/jumbo.jpg'
}