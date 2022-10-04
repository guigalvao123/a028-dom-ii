let adicionaItem = (event) => {
    let input = document.getElementById("container")
    let inputNovo = document.createElement("article")

    inputNovo.innerHTML = ""
    input.insertAdjacentElement(`beforeend`,inputNovo)
    inputNovo.classList.add("item")

    inputNovo.setAttribute("onclick", "removeItem(event)")   
}

function removeItem(event){
    event.target.remove()
}