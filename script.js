let btnMenu = document.getElementById('btn-menu').addEventListener('click',exibirMenu)
let menu = document.getElementsByTagName('nav')[0]
let btnMenuImg = document.getElementById('btn-menu')

function exibirMenu(){
    if(menu.classList.contains('fechado')){
        menu.classList.remove('fechado')
        btnMenuImg.setAttribute('src','icones/menu-fechar-branco.png')
        

    }else{
        menu.classList.add('fechado')
        btnMenuImg.setAttribute('src','icones/menu-branco.png')
    }
}

let itensMenu = document.querySelectorAll('nav')[0].addEventListener('click',recolherMenu)
function recolherMenu(){
    exibirMenu()
}


setInterval(function (){
    
    let dias= document.getElementById('dia')
    let horas= document.getElementById('hora')
    let minutos= document.getElementById('minuto')
    let segundos= document.getElementById('segundo')

    let tempo = new Date("july 28,2022").getTime() - new Date().getTime()

 
    let segundosRestantes = parseInt((tempo/1000))
    let minutosRestantes = parseInt((segundosRestantes/60))
    let horasRestantes = parseInt((minutosRestantes/60))
    let diasRestantes = parseInt(horasRestantes/24)



    

     dias.innerText= diasRestantes
     horas.innerText = horasRestantes %24
     minutos.innerText= minutosRestantes %60
     segundos.innerText= segundosRestantes %60


    
 }, 1000);



