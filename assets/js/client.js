const submitBtn = document.getElementById('submitBtn')
let userInput = document.querySelector('input')

// EXAMPLE from W3Schools for push function
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");

document.getElementById("demo").innerHTML = fruits; */

// EXAMPLE from W3Schools for map function
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
clients.push("Suzie S")
    
document.getElementById("clients").innerHTML = clients;

/* var addClient = function(){
    let clientName = userInput.value
    
    var clientObj = {
        name: clientName
    };
    
     // createClientEl(clientObj) 

    var createClientEl = () => {
        clients.push(clientName)
    
        document.getElementById("clients").innerHTML = clients;

        console.log(clientName)
    }; 

    createClientEl(clientObj)
}; 

var loadClients = function() {
    clients = JSON.parse(localStorage.getItem("clients"));
};

var saveClients = function() {
    localStorage.setItem("clients", JSON.stringify(clients));
};

submitBtn.addEventListener('click', addClient);

loadClients()
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

// submitBtn.addEventListener('click', () => {
    //addClient()
//}); 