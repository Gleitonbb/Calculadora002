const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const Display = document.querySelector(".display")
const teclaOn = document.querySelector("#teclaoff")
const teclaLimpar = document.querySelector("#limpar")
const teclaIgual = document.querySelector("#resultado")
const abacalc = document.querySelector(".principalcalc")
const calculadora = document.querySelector("#calcprinc")

let sinal = false
let decimal = false

teclasNum.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        sinal = false
    if(evt.target.innerHTML == ","){
            if(!decimal){
                decimal = true
                if(decimal.innerHTML == "0"){
                    decimal.innerHTML = "0,"
                }else{
                    Display.innerHTML += evt.target.innerHTML  
                }
            }
        }else{
            if(Display.innerHTML == "0"){
                Display.innerHTML = ""
            }
            
            Display.innerHTML += evt.target.innerHTML  
        }
       
    })
})
teclasOp.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal = true
            if(Display.innerHTML == "0"){
                Display.innerHTML = ""
            }
         if(evt.target.innerHTML == "X"){
            Display.innerHTML += "*"
         }else{
             Display.innerHTML += evt.target.innerHTML
         }
        }
    })
})
teclaOn.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false

    Display.innerHTML = "0"
    
})
teclaIgual.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    const res = eval(Display.innerHTML)
    Display.innerHTML = res
})
// teclaLimpar.addEventListener("click",(evt)=>{
//     let displayConteudo = Display.innerHTML
//     if(displayConteudo.length > 0){
//        Display.innerHTML = displayConteudo.slice(0, -1)
       
//     }
// })
teclaLimpar.addEventListener("click",(evt)=>{
    if(Display.innerHTML.length > 0){
     Display.innerHTML  = Display.innerHTML.slice(0, -1)
    }
    })
    abacalc.addEventListener("click",(evt)=>{
       calculadora.classList.toggle("calcprinc_exibir")
    })