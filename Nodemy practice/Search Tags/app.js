const input = document.querySelector('input')
const ul = document.querySelector('ul')

let storageKey = 'searchTags'
let tags = JSON.parse(localStorage.getItem(storageKey))

tags !== null ? tags.forEach(tag => createTag(tag)) : tags=[]

function removeAll() {
    ul.querySelectorAll('li').forEach((li) => li.remove())
}

function deleteTag (element, tag) {
    let index = tags.indexOf(tag)
    tags.splice(index, 1)
    element.parentNode.remove()
    localStorage.setItem(storageKey, JSON.stringify(tags))

}

function createTag (tag) {
        let liTag = `
            <li>${tag}
            <i class="fa-solid fa-xmark" onclick="deleteTag(this, '${tag}')"></i>
            </li>
            `;
        ul.insertAdjacentHTML('afterbegin', liTag);
}
function addTag (e) {
    if (e.which == 13) {
        let tag = e.target.value
        if (tag != '' && !tags.includes(tag)) {
            tags.push(tag)
            createTag(tag)
            e.target.value = ''
            localStorage.setItem(storageKey, JSON.stringify(tags))
        }
    }
}
input.addEventListener('keyup', addTag)

document.querySelector('.btn-removeAll').addEventListener('click', () => {
    tags.length = 0
	removeAll()
})

