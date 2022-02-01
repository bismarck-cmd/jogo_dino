let personagem = document.querySelector('#personagem')
let cactu = document.querySelector('#cactu')

personagem.classList.add('mover')
    

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')  
        personagem.classList.add('alive')
    }
    setTimeout(function(){
        personagem.classList.remove('animar')
        personagem.classList.remove('alive')
    }, 500)
}

document.querySelector('body').addEventListener('keydown', function(event){
    var tecla = event.keyCode;

    if(tecla == 32){
        pular()

    }else if(tecla == 38){
        pular()

    }else if(tecla == 87){
        pular()
    }


});
const getCactus = () => {
    return Array.from(document.getElementsByClassName("cactu"));
};
var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var EsquerdaCactu = parseInt(
        window.getComputedStyle(cactu).getPropertyValue('left')
       )

       if(EsquerdaCactu < 20  && EsquerdaCactu > 0 && topoPersonagem >= 130){
        personagem.style.animationPlayState = "paused";
        cactu.style.animationPlayState = "paused";
        personagem.classList.add('dead');
        
    }
}, 10)