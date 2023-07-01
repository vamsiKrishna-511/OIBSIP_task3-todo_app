let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// add btn disabled
input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
});

// add new items to the list
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata'});
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p class="task">${input.value}</p>
        <p class="timestamp">${now}</p>
        <div class="item-btn">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
          <button class="check-btn">Check</button>
          </div>
        `;
        tasks.appendChild(newItem);
        input.value = "";
    } else {
        alert('Kindly enter a task');
    }
});

//delete from the list
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.remove();
    }
});

//mark item as completed 
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('check-btn')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});

//edit the item 
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        let itemText = e.target.parentElement.parentElement.querySelector('p');
        let newText = prompt('Enter new text:', itemText.textContent);
        if (itemText !== null && newText.trim() !== '') {
            itemText.textContent = newText.trim();
        }
    }
});