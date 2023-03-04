const ct1 = document.querySelector("#ct1")
const ct2 = document.querySelector("#ct2")
const btn = document.querySelector("#btn")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((e)=>{
    e.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("destaque")
    })
})

btn.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".destaque")]
    cursosSelecionados.map((el)=>{
        ct2.appendChild(el)
    })
})





// c1.addEventListener("click", (evt)=>{
//     const el = evt.target
//     el.classList.add("destaque")
//     c1.innerHTML = "curso de html completo"
// })


