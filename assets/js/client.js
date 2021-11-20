const submitBtn = document.getElementsByClassName('submitBtn')
let userInput = document.querySelector('input')
/* const clients = document.getElementsByClassName('clients') */

let clients = [];

const addClient = () => {
    let clientName = userInput.value
    
    var clientObj = {
        name: clientName
    };
    
    createClientEl(clientObj)
};

var createClientEl = () => {
    clients.push(clientName.value)

    console.log(clientName)
};

document.addEventListener('click', addClient);

/* let client = [];
let clientName = document.getElementsByClassName("input").value

const addClient = () => {
    
    var clientObj = {
        name: clientName
    };
    
    createClientEl(clientObj)
};

var createClientEl = () => {
    clients.push(clientName.value).clientObj

    console.log(clientName)
}; */

/* submitBtn.addEventListener('click', () => {
    addClient()
}); */