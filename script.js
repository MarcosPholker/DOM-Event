const ct1 = document.querySelector("#ct1")
const curso = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")


const cursos = ["HTML","CSS","JavaScript","PHP","MySQL","react Native"]

cursos.map((el, i)=>{
    i++
    const novosElemento = document.createElement("div")
    novosElemento.setAttribute("id","c"+i)
    novosElemento.setAttribute("class", "curso c1")
    novosElemento.innerHTML = el

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src","./pngwing.com.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    btn_lixeira.addEventListener("click",(evt)=>{
        ct1.removeChild(evt.target.parentNode)
        console.log(evt.target.parentNode)
    })

    novosElemento.appendChild(btn_lixeira)
    ct1.appendChild(novosElemento)
})


