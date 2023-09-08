function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = () => span.parentElement.style.display = "none";
}

document.querySelectorAll('li').forEach(createCloseButton);

document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
        e.target.classList.toggle('checked');
});

function add() {
    // Obtém o valor do campo de entrada no formulário chamado "task" e remove espaos em branco no início e no fim 
    let input_value = document.form_main.task.value.trim(); 
   
    // Verifica se o valor do campo de entrada não está vazio (ou seja, contém algum texto) 
    if (input_value !== '') { 
    // Cria um novo elemento de lista (li)
    let li = document.createElement('LI');

    // Cria um nó texto contendo o valor do campo de entrada
    let input_text = document.createTextNode(input_value);

    // Adiciona o nó de texto como filho do elemento de lista (li)
    li.appendChild(input_text);

    // Encontra o primeiro elemento <ul> (lista não ordenada) no documento e adiciona o elemento de lista (li) a ele
    document.querySelector('ul').appendChild(li);

    //Lima o valor do campo de dentrada, tornando-o vazio novamente
    document.form_main.task.value = "";

    // Chama a função createCloseButton para criar um botão de fechar no novo elemenro de lista (li)
    createCloseButton(li);
}
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        var btn = document.querySelector("#submit");

        btn.click();
    }
});


