//criar novo list item ao carregar no butão add 

function addTask(){
    const valorInput = document.querySelector('.task-input-class').value; //ler o input
    const listItem = document.createElement("li"); //cria elemento listItem
    listItem.innerHTML = valorInput; //dá o valor do input ao list item

}