const navIcon = document.querySelector('.nav-icon')
const navButton = document.querySelectorAll('.nav-menu button')
const container = document.querySelector('.container-area')
let count = 0

// initial
if (localStorage.length === 0)  addNewList(0)
else {
    let maxIndex = 0
    for (let [key, value] of Object.entries(localStorage)) {
        let index = +key.split(' ')[2]
        maxIndex = index >= maxIndex ? index+1 : maxIndex
        console.log('key : ' + index);
        addNewList(index)
    }
    count = maxIndex > count ? maxIndex : count
    console.log('max index : ' + maxIndex);
}

function toggleMenu () {
    navIcon.parentNode.classList.toggle('active')
}

function removeAll() {
    document.querySelectorAll('.container').forEach(e => e.remove())
    localStorage.clear()
}

function deleteTag(element) {
    element.parentNode.remove()
    if (element.parentNode.tagName === 'DIV') {
        let index = element.parentNode.className.split('-')[1];
        localStorage.removeItem(`Storage key ${index}`)
    }
    else
    updateLocalStorage()
}

function completeTag(element) {
    element.parentNode.classList.toggle('complete')
}

// add a new todo-list when click on nav
function addNewList(index) {
    if (count) {
        index = count++
    }
    console.log('count : ' + count);
    console.log('index : ' + index);
    let newList = `
    <div class="container container-${index}">
        <form action="" class="form">
            <input class ="input-${index}" type="text" placeholder="Enter your todo">
            <button class="add-btn">Add</button>
        </form>
        <ul></ul>
        <button onclick="deleteTag(this)">Remove list</button>
    </div>
    `
    container.insertAdjacentHTML('afterbegin', newList)
    todoListSolving(index)
}

function todoListSolving (index) {
    let input = document.querySelector(`.container-${index} input`)
    let addBtn = document.querySelector(`.container-${index} .add-btn`)
    let ul = document.querySelector(`.container-${index} ul`)
    
    let storageKey = `Storage key ${index}`
    let todos = JSON.parse(localStorage.getItem(storageKey))
    if (todos === null)  todos = []
    else {
        todos.reverse()
        todos.forEach (todo => createTag(todo))
    }

    addBtn.addEventListener('click', addTodoTag)
    
    function createTag (tag) {
        let newLi = `
        <li>
        <span onclick="completeTag(this)">${tag}</span>
        <i class="fa fa-trash" onclick="deleteTag(this, '${tag}')"></i>
        </li>
        `
        ul.insertAdjacentHTML('afterbegin', newLi)
    }
    
    function addTodoTag (e) {
        let tag = input.value
        e.preventDefault()
        if (tag !== '') {
            console.log(tag);
            createTag(tag)
            input.value = ''
        }
        updateLocalStorage()
    }

}

function updateLocalStorage () {
    let containers = document.querySelectorAll('.container')
    containers.forEach((container, index) => {
        let key = `Storage key ${index}`
        let liList = container.querySelector(`ul`).querySelectorAll('li')
        let todos = []
        liList.forEach(li => {
            let text = li.firstElementChild.innerText
            todos.push(text)
        })
        localStorage.setItem(key, JSON.stringify(todos))
        console.log(`todos : ${todos}`);
    })
}
function check () {
    for (let [key, value] of Object.entries(localStorage)) {
        let index = key.split(' ')[2]
        console.log(`${key}: ${value}, index: ${index}`);
    }
}