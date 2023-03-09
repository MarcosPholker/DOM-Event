const cursos = ["html", "css", "javaScript","python","react"]
const caixaCurso = document.querySelector("#caixaCursos")

const btnSelecionarCurso = document.getElementById("selecionarCurso")

const btnRemoverCurso = document.getElementById("removerCurso")

const btnAdcionarCursoAntes = document.getElementById("adcionarCurso")

const inputNovoCurso = document.getElementById("textoNovoCurso")

var indice = 0

const tirarSelecao = () =>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "novoE"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso;
    
    novoElemento.addEventListener("click", (evt) =>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })

    return novoElemento    
}

cursos.map((el,chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCurso.appendChild(novoElemento)
    indice++
})


function  cursoSelecionado(){
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

btnSelecionarCurso.addEventListener("click",(evt)=>{
    try{
    alert("curso "+ cursoSelecionado().innerHTML + " selecionado")
    }catch(ex){
        alert("selecione um curso")
    }
})


btnRemoverCurso.addEventListener("click",(evt)=>{
    const cs = cursoSelecionado()
    if(cs != undefined){
        cs.remove()
    }else{
        alert("selecione um curso")
    }
})

btnAdcionarCursoAntes.addEventListener("click", (evt)=>{
    try{
        if(inputNovoCurso.value!=""){
        const novoCurso = criarNovoCurso(inputNovoCurso.value)
        caixaCurso.insertBefore(novoCurso, cursoSelecionado())
        }else{
            console.log(inputNovoCurso.value)
            console.log("digite o nome do curso")
        }
    }catch(ex){
        console.log(inputNovoCurso.value)
        alert("selecione um curso")
}
})

