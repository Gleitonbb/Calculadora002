const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const Display = document.querySelector(".display")
const teclaOn = document.querySelector("#teclaoff")
const teclaLimpar = document.querySelector("#limpar")

let sinal = false

teclasNum.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
        sinal = false
        if(Display.innerHTML == "0"){
            Display.innerHTML = ""
        }
        Display.innerHTML += evt.target.innerHTML 
    })
})
teclasOp.map((upu)=>{
    upu.addEventListener("click",(evt)=>{
    if(sinal==false){
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
    Display.innerHTML = 0
    sinal = false
})

