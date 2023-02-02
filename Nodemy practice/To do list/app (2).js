const navIcon = document.querySelector('.nav-icon')
const navButton = document.querySelectorAll('.nav-menu button')
const container = document.querySelector('.container-area')
let count = 0

/*
Giải quyết: các phần tử sẽ có thêm key cho nó để dễ nhận diện và thêm sửa xóa
Cái này là chuẩn nhé để nhận diện phần tử dễ, ko phải là bần mới thêm key đâu, chuẩn reactjs luôn đấy
=> Thêm id cho các phần tử thoai
*/

// reset browser data
if (localStorage.length === 0) {
    addNewList(0)
} else {
    // Chạy ngược lại từ cuối về đầu để danh sách hiển thị theo chiều xuôi
    // Vì ban đầu chạy xuôi thì giao diện danh sách hiển thị ngược nên t chạy ngược
    for (let i = 0; i < localStorage.length; i++ ) {
        // Lấy ra tên khóa của từng phần tử => Storage key 1
        const temp = localStorage.key( i );
        // Lấy ra vị trí bằng cách split chuỗi thành mảng (["Storage", "key", "1"]) rồi lấy vị trí thứ 2 => "1"
        const index = temp.split(" ")[2];
        console.log('index = ' +index);
        //Nếu vị trí đang xét là phần tử có key lớn nhất (chạy ngược mà)
        if (count <= index) {
            // Dùng count để lưu lại 1 giá trị index mới, khi mà add danh sách mới sẽ đi dùng biến count này
            // +index là convert string thành number => Mẹo
            count = +index + 1;
        }
        addNewList(index);
    }
}

function toggleMenu () {
    navIcon.parentNode.classList.toggle('active')
}

function removeAll() {
    document.querySelectorAll('.container').forEach(e => e.remove())
    localStorage.clear()
}

function deleteTag(element, index) {
    element.parentNode.remove()
    updateStorage(index, element)
}

function completeTag(element) {
    element.parentNode.classList.toggle('complete')
}

// add a new todo-list when click on nav
function addNewList(index) {
    // Với trường hợp mình add new danh sách, thì ko có tham số index truyền vào => thay thế index = count.
    if (!index) {
        index = count;
        console.log(index);
        //count tăng 1 đơn vị, để nếu add new thì có key ko trùng
        count++;
    }
    let newList = `
    <div class="container">
        <form action="" class="form">
            <input id="input-${index}" type="text" placeholder="Enter your todo">
            <button id="btn-${index}" class="add-btn">Add</button>
        </form>
        <ul id="ul-${index}"></ul>
        <button onclick="deleteTag(this, ${index})">Remove list</button>
    </div>
    `
    container.insertAdjacentHTML('beforeend', newList)
    todoListSolution(index)
}

function todoListSolution(index) {
    const ul = document.getElementById(`ul-${index}`)
    const input = document.getElementById(`input-${index}`)
    const addBtn = document.getElementById(`btn-${index}`)
    
    todoList(index)

    function todoList(index) {
        addBtn.addEventListener('click', addTodoTag)
        let storageKey = `Storage key ${index}`
        let todos = JSON.parse(localStorage.getItem(storageKey))
        if (todos === null)  todos = []
        else {
            todos.forEach (todo => createTag(todo))
        }
            

        function addTodoTag(e) {
            e.preventDefault()
            let tag = input.value
            if (tag != '') {
                input.value = ''
                createTag(tag)
                todos.push(tag)
                localStorage.setItem(storageKey, JSON.stringify(todos))
            }
        }

        function createTag(tag) {
            let newLi = `
                <li>
                <span onclick="completeTag(this)">${tag}</span>
                <i class="fa fa-trash" onclick="deleteTag(this, '${index}')"></i>
                </li>
                `
            ul.insertAdjacentHTML('afterbegin', newLi)
        }
    }
}

// Delete storage data update
function updateStorage (index, element) {
    let parent = element.parentNode.tagName
    const storageKey = `Storage key ${index}`
    if (parent === 'LI') {
        let todos = []
        let liList = document.getElementById(`ul-${index}`).querySelectorAll('li')
        liList.forEach(li => {
            let text = li.querySelector('span').innerText
            todos.push(text)
        })
        localStorage.setItem(storageKey, JSON.stringify(todos))
    }
    else if (parent === 'DIV') {
        localStorage.removeItem(storageKey)
    }
}
