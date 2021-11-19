const submitBtn = document.getElementsByClassName('submitBtn')
/* let userInput = document.querySelector('input') */

let clients = [];

const addClient = (event) => {
    event.preventDefault()
    let clientName = document.querySelector('input').value
    
    var clientObj = {
        name: clientName
    };
    
    createClientEl(clientObj)
};

var createClientEl = () => {
    clients.push(clientName.value)
};

/* submitBtn.addEventListener('click', () => {
    clients.push(clientName.value)
    userInput.value = ''
    addClient()
}); */