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

        console.log(clientName)
    
        document.querySelector("input[id='clientName']").value = "";
    }
}

submitBtn.addEventListener('click', createClient);

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