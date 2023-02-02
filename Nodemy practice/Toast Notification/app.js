const toastArea = document.getElementById('toasts')

let toasts = {
    "success": {
        "icon": '<span class="material-icons">check_circle</span>',
        "msg": 'This is a success message'
    },
    "warning": {
        "icon": '<span class="material-icons">warning</span>',
        "msg": 'This is a warning message'
    },
    "error": {
        "icon": '<span class="material-icons">error</span>',
        "msg": 'This is a error message'
    }
}

const buttons = document.querySelectorAll('.btn') 
buttons.forEach((btn) => {
    showToast(btn)
})

function showToast (btn) {
    btn.addEventListener('click', (e) => {
        let data = e.target.getAttribute('class').split('-')[1]
        createToast(data)
    })
}
function createToast(data) {
    let toast = document.createElement('div')
    toast.innerHTML = `
    <div class="toast toast-${data}">
        ${toasts[data].icon}
        <span>${toasts[data].msg}</span>
        <div class="countdown"></div>
    </div>`
    toastArea.appendChild(toast)

    setTimeout(() => {
        toast.style.animation = 'hide_toast 1.5s linear forwards'
    }, 5000)
    setTimeout(() => {
        toast.remove()
    }, 7000)
}