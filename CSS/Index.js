const submit = document.getElementById('submitBTN')
let name = document.getElementById("userName")
let word = document.getElementById("password")

// here the usernames and passwords are stored
let usernames = ['Java-Fanatic', 'HTMLlord15', 'CSSmaster99']
let passwords = ['Java100', 'Hyper-234', 'Style-man1']

// let usernames = [{text: 'Java-Fanatic', pass: 'Java100'},{text: 'HTMLlord15', pass: 'Hyper-234'}]

// this helps prevent wrong or null values
let N = -1

// submit.disabled = true
submit.addEventListener('click', newPage)

// this determines if the log in info was correct
function newPage() {
    // these determine the location of the username and password stored within the array
    let U = usernames.indexOf(name.value)
    let P = passwords.indexOf(word.value)
    console.log('username in array is ' + U)
    console.log('password in array is ' + P)

    // if both username and password are in the same location in the array, then allows access
    if ((U === P) && (U != N || P != N)) {
        window.location.href = 'C:/Users/Ben/Desktop/coding-projects/CSS-practice.html'
        console.log('logged in')
    }
    // this prevents wrong or null values
    else if (U === N || P === N) {
        // location.reload()
        console.log('not correct')
    }
    else {
        // location.reload()
        console.log('not correct')
    }
}

// (name.value === 'Java-Fanatic' && word.value === 'Java100')
// usernames.includes(name.user)