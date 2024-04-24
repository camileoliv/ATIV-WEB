const madoka = document.querySelector('.madoka');
const pipe = document.querySelector ('.pipe');

const jump = () => {
    madoka.classList.add('jump');

    setTimeout(() => {

        madoka.classList.remove('jump');

    }, 500);
}

const loop = setInterval (()=> {

    const pipePosition = pipe.offsetLeft;
    const madokaPosition = +window.getComputedStyle(madoka).bottom.replace('px', '');

    
    if (pipePosition <= 110 && pipePosition > 0 && madokaPosition < 90) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        madoka.style.animation = 'none';
        madoka.style.bottom = `${madokaPosition}px`;

        madoka.src = 'images/cabo-Photoroom.png-Photoroom.png'
        madoka.style.width = '90px'
        madoka.style.marginLeft = '35px'

        clearInterval(loop)
    } 

}, 10)

document.addEventListener('keydown', jump);