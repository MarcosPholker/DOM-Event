const cursos = ["html", "css", "javaScript","python","react"]
const caixaCurso = document.querySelector("#caixaCursos")

const btnSelecionarCurso = document.getElementById("selecionarCurso")

const btnRemoverCurso = document.getElementById("removerCurso")

const btnAdcionarCursoAntes = document.getElementById("adcionarCurso")

const inputNovoCurso = document.getElementById("textoNovoCurso")

var indice = 0
const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "novoE"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso;

    const inputRadio = document.createElement("input")
    inputRadio.setAttribute("type", "radio")
    inputRadio.setAttribute("name", "radio")
    inputRadio.setAttribute("id","radio"+indice)


    novoElemento.appendChild(inputRadio)
    return novoElemento    
}

cursos.map((el,chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCurso.appendChild(novoElemento)
    indice++
})


function radioSelecionado(){
    const radioS = [...document.querySelectorAll("input[type=radio]")]
    const radioschekados = radioS.filter((ck)=>{
        return ck.checked
    })
    console.log(radioschekados[0])
    return radioschekados[0]
}

btnSelecionarCurso.addEventListener("click",(evt)=>{
    try{
    const cs = radioSelecionado()
    const cursoSelecionado = cs.parentNode.textContent
    alert("curso "+ cursoSelecionado + " selecionado")
    }catch(ex){
        alert("selecione um curso")
    }
})


btnRemoverCurso.addEventListener("click",(evt)=>{
    try{
    const rc = radioSelecionado();
    const removerCurso = rc.parentNode
    removerCurso.remove()
    }catch(ex){
        alert("selecione um curso")
    }
})

btnAdcionarCursoAntes.addEventListener("click", (evt)=>{
    const cs = radioSelecionado()
    try{
    const cursoSelecionado = cs.parentNode
    const novoCurso = criarNovoCurso(inputNovoCurso.value)
    caixaCurso.insertBefore(novoCurso,cursoSelecionado)
    }catch(ex){
        alert("selecione um curso")
}
})