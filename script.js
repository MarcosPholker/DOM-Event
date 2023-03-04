const ct1 = document.querySelector("#ct1")
const ct2 = document.querySelector("#ct2")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((e)=>{
    e.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("destaque")
    })
})

btn1.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".destaque")]
    cursosSelecionados.map((el)=>{
        ct2.appendChild(el)
    })
    
})

btn2.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".curso:not(.destaque)")]
    const list = todosCursos.classList
    cursosSelecionados.map((el)=>{
        ct1.appendChild(el)
    })
})




