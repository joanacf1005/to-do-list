//criar novo list item ao carregar no butão add 
function addTask(){
    const input = document.querySelector('.task-input-class'); // seleciona o input 
    const valorInput = input.value; //lê o input

    if (valorInput.length > 20) {
        alert("Máximo 20 letras!");
        input.value = "";
        return;
    }

    const listItem = document.createElement("li"); //cria elemento listItem
    listItem.classList.add("task-item"); 
    listItem.innerHTML = valorInput; 
    listItem.innerHTML = `
        <label class="task-left">
            <input type="checkbox" class="task-checkbox">
            <span class="custom-checkbox"></span>
            <span class="task-text">${valorInput}</span>
            <button class="delete-btn">X</button>
        </label>
    `; //dá o valor do input ao list item e adiciona botões

    console.log(valorInput); 
    console.log(listItem.innerHTML);

    const taskDone = listItem.querySelector('.task-checkbox'); //seleciona a checkbox
    taskDone.addEventListener('click', moveToCompleted); //adiciona evento de mover 

    const deleteBtn = listItem.querySelector('.delete-btn'); // seleciona o botão
    deleteBtn.addEventListener('click', deleteTask); // adiciona evento de delete

    const taskList = document.querySelector('.tasks-list'); //vai buscar tasks-list onde quero meter as tarefas
    taskList.appendChild(listItem); // adiciona o listItem criado dentro da lista

    input.value = "";//deixa a caixinha de input vazia
}


//Apagar o listItem ao carregar no delete-btn
function deleteTask(event){ 
    event.stopPropagation(); // evita clicar no checkbox por engano
    const taskItem = event.target.closest('.task-item'); // encontra o listItem pai
    if (taskItem) {
        taskItem.remove(); // remove do DOM
    }

    console.log("apagado");
}

//Mover as tarefas completas para a aba completed tasks

function moveToCompleted(event) {
    event.stopPropagation();
    const taskItem = event.target.closest('.task-item'); // pega o listItem original
    
    if (taskItem) {
        const listItem = document.createElement("li"); // cria novo listItem
        listItem.classList.add("completed-task-item"); 

        const taskText = taskItem.querySelector('.task-text').textContent; //// pega o texto da tarefa original

        // define o conteúdo do novo li, sem botão delete
        listItem.innerHTML = `
            <label class="task-left">
                <span class="task-text">${taskText}</span>
            </label>
        `;

        const completedList = document.querySelector('.completed-tasks-list');
        completedList.appendChild(listItem); // adiciona o listItem à lista de completadas

        taskItem.remove(); // remove da lista de tarefas ativas
    }
}
