const submitBtn = document.getElementById('submitBtn')
let client = document.getElementById('client')

function createClient() {
   var ul = document.getElementById('client')
   var clientName = document.getElementById('clientName')
   var li = document.createElement("li")
   li.setAttribute('id', clientName.value)
   li.appendChild(document.createTextNode(clientName.value))
   ul.appendChild(li)

   client.classList.remove("hide")

   document.querySelector("input[id='clientName']").value = "";
}

submitBtn.addEventListener('click', createClient)

//let userInput = document.querySelector('input')

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




/* let clients = [];
//clients.forEach(addClient);

function addClient() {
    let clientName = document.querySelector("input[name='clientName']").value
    console.log(clientName)

    clients.push(clientName)

    client.innerHTML = clients;

    document.querySelector("input[id='clientName']").value = "";
};  */




/* var clientObj = {
        name: clientName
    } */

    //createClient(clientObj)

    /* clientObj.innerHTML = 
    "<ul class='clientName'>" + clientName + "</ul>" + clients
    clients.push(clientName) */

    /* var clientObj = {
        name: clientName
    };*/

/* function createClient(clientObj) {
    clientList = document.createElement("li")
    clientList.idName = "clients"

    clientList.createElement('ul')
    clientList.appendChild(clientObj)
}; */



//submitBtn.addEventListener('click', addClient);



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

    clientList = document.createElement("li");

}; */