const submit = document.getElementById('submitBTN')
let name = document.getElementById("userName")
let word = document.getElementById("password")

// let usernames = [{user:'Java-Fanatic', pass: 'Java100'},{user:'HTMLlord15', pass: 'Hyper-234'}]
let usernames = ['Java-Fanatic', 'HTMLlord15', 'CSSmaster99']
let passwords = ['Java100', 'Hyper-234', 'Style-man1']
let N = -1

submit.addEventListener('click', newPage)

// this determines
function newPage() {
    let U = usernames.indexOf(name.value)
    let P = passwords.indexOf(word.value)
    console.log('username in array is ' + U)
    console.log('password in array is ' + P)

    if ((U === P) && (U != N || P != N)) {
        window.location.href = 'C:/Users/Ben/Desktop/coding-projects/CSS-practice.html'
        console.log('logged in')
    }
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