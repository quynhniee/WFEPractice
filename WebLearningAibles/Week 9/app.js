const ul = document.getElementById("list-group");
const input = document.querySelector("input");
const form = document.querySelector("form")

function createLi(content) {
    let newLi =
        `<li class="list-group-item d-flex justify-content-between">
        <div class="list-item-content d-flex">
            <span class="px-2">${content}</span>
            <button class="btn btn-sm btn-outline-success" onclick="toggleEdited(this.previousElementSibling)">Done</button>
        </div>
        <div class="text-secondary">
            <span class="material-icons" onclick="completed(this)">done</span>
            <span class="material-icons" onclick="edited(this)">edit</span>
            <span class="material-icons" onclick="deleted(this)">close</span>
        </div>
    </li>`;
    ul.insertAdjacentHTML('afterbegin', newLi);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() != '')
        createLi(input.value);
    input.value = '';
})

function deleted(ele) {
    ele.closest('li').remove()
}

function completed(ele) {
    ele.closest('li').classList.toggle("list-group-item-success");
}

function edited(ele) {
    let listItem = ele.closest('li').querySelector('.list-item-content span');
    toggleEdited(listItem);
}

function toggleEdited (listItem) {
    console.log(listItem);
    listItem.toggleAttribute('contenteditable');
    listItem.parentElement.classList.toggle('edited');
    listItem.isContentEditable ? editable() : uneditable();
    function editable () {
        listItem.style.backgroundColor = 'lightgray';
    }
    function uneditable () {
        listItem.style.backgroundColor = 'white';
    }
}