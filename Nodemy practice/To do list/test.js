const navIcon = document.querySelector('.nav-icon')
const navButton = document.querySelectorAll('.nav-menu button')
const container = document.querySelector('.container-area')

let count = 0
function toggleMenu () {
    navIcon.parentNode.classList.toggle('active')
}

addNewList()

function removeAll() {
    document.querySelectorAll('.container').forEach(e => e.remove())
}

function deleteTag(element) {
    element.parentNode.remove()
}

function completeTag(element) {
    element.parentNode.classList.toggle('complete')
}

function addNewList() {
    let newList = `
    <div class="container">
        <form action="" class="form">
            <input type="text" placeholder="Enter your todo">
            <button class="add-btn">Add</button>
        </form>
        <ul></ul>
        <button onclick="deleteTag(this)">Remove list</button>
    </div>
    `
    container.insertAdjacentHTML('beforeend', newList)
    todoListSolution()
    count++
}

function todoListSolution() {
    const ul = document.querySelectorAll('ul')
    const input = document.querySelectorAll('input')
    const addBtn = document.querySelectorAll('.add-btn')
    
    todoList(count)

    function todoList(index) {
        addBtn[index].addEventListener('click', addTodoTag)

        function addTodoTag(e) {
            e.preventDefault()
            let tag = input[index].value
            if (tag != '') {
                createTag(tag)
                input[index].value = ''
            }
        }

        function createTag(tag) {
            let newLi = `
                <li>
                <span onclick="completeTag(this)">${tag}</span>
                <i class="fa fa-trash" onclick="deleteTag(this)"></i>
                </li>
                `
            ul[index].insertAdjacentHTML('afterbegin', newLi)
        }
    }
}
