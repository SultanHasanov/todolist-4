const url = "https://jsonplaceholder.typicode.com/todos/1";
const btn = document.getElementById('btn')
const ul = document.getElementById('result');
const div = document.getElementById('content')
const input = document.getElementById('input')

const li = document.createElement('li');
    ul.prepend(li)


btn.addEventListener('click', (event) => {
    event.preventDefault();
    fetchTodo()
    text()
})

function text () {
    if(input.value !== ''){
    const li = document.createElement('li');
    li.className = 'li'
    li.textContent = input.value
    input.value = ''
    ul.prepend(li)
    }
}

async function fetchTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
        const data = await response.json();
        li.innerHTML =  data.title
        // li.innerHTML = `
        // <div> ${data.title}</div>
        // `
    } catch (error) {
        console.log(error)
    }
}

// function text () => {

// }