function createCloseButton(li) {
    let botaoFechar = document.createElement("BOTAOFECHAR");
    let txt = document.createTextNode("\u00D7");

    botaoFechar.className = "close";
    botaoFechar.appendChild(txt);
    li.appendChild(botaoFechar);

    botaoFechar.onclick = () => botaoFechar.parentElement.style.display = "none";
}

/*
function novoPopup(){
    var windows = window.open ('popup.html', "popup")

}
*/

document.querySelectorAll('li').forEach(createCloseButton);

document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
        e.target.classList.toggle('checked');
});

function botaoaddTasks() {
    let input_value = document.form_main.task.value.trim(); 

    if (input_value !== '') { 

    let li = document.createElement('LI');

    let input_text = document.createTextNode(input_value);
    
    li.appendChild(input_text);
    
    document.querySelector('ul').appendChild(li);
   
    document.form_main.task.value = "";

    createCloseButton(li);
}
}

function alterarTema() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        var btn = document.querySelector("#submit");

        btn.click();
    }
});


