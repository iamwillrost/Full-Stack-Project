const submitBtn = document.getElementById('submitBtn')
let userInput = document.querySelector('input')

// EXAMPLE from W3Schools for PUSH function
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");

document.getElementById("demo").innerHTML = fruits; */

// EXAMPLE from W3Schools for MAP function
/* const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
  
  persons.map(getFullName);
  
function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
} */

let clients = [];
//clients.forEach(newClient);

function addClient() {
    let clientName = (userInput).value
    console.log(clientName)

    clients.push(clientName)

    document.getElementById('clients').innerHTML = clients;

    document.querySelector("input[id='clientName']").value = "";
    
    /* var clientObj = {
        name: clientName
    };*/
}; 

submitBtn.addEventListener('click', addClient);

/* loadClients()
saveClients() */




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