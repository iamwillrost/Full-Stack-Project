const submitBtn = document.getElementById('submitBtn')
let client = document.getElementById('client')

// need to append li to href to list hyperlinks
function createClient() {
    var names = []
    var clientName = document.getElementById('clientName').value
    // pushes name into array so array isn't empty
    names.push(clientName)
    console.log(names)
    for (var i = 0; i < names.length; i++) {
        var ul = document.getElementById('client')
        var text = document.createTextNode(names[i])
        var li = document.createElement("li")
        var a = document.createElement("a")

        a.textContent = clientName.value
        // need to create actual page; handlebars???; back-end???
        a.setAttribute('href', "")

        li.setAttribute('id', names[i])
        li.appendChild(text)
        ul.appendChild(li)

        console.log(clientName.value)

    client.classList.remove("hide")

    document.querySelector("input[id='clientName']").value = "";
    }
}
//  team profile generator

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