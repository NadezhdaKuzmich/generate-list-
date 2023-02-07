const listAdd = document.querySelector('#list-add');
const list = document.querySelector('.list');
const lists = document.querySelectorAll('.list-count');
let deleteBtns;

list.addEventListener('click', function (event) {
    const trigger = event.target.closest('p');
    if (trigger) {
      trigger.classList.toggle('hide');
    }
});  

function counter() {
    const mapLetterToNumber = ['Перший', 'Другий', 'Третій', 'Четвертий', "П'ятий", 'Шостий','Сьомий', 'Восьмий', "Дев'ятий", 'Десятий'];
    const lists = document.querySelectorAll('.list-count');
    const lines = document.querySelectorAll('.line-count');
    deleteBtns = document.querySelectorAll('.list-delete');
    listAdd.classList.remove('deactivate');
    let countLine = 1;
    let count = 0;

    for(let span of lists) {
        span.textContent = mapLetterToNumber[count];
        count++;
        if(lists.length > 9) {
            listAdd.removeEventListener('click', addToList);
            listAdd.classList.add('deactivate');
        } 
    }

    for(let line of lines) {
        line.textContent = countLine;
        countLine++;
    }               
}

function addToList() {
    const li = document.createElement('li');
    li.classList.add('new-list');
    li.innerHTML = '<p class="hide">' +
    '<span class="list-count"></span>' + ' список</p>' +
    '<button class="list-delete">Видалити</button>' +
    '<ul class="sub-list">' +
    '<li>'+ '<span class="line-count"></span>' + ' елемент списку</li>' +
    '<li>'+ '<span class="line-count"></span>' + ' елемент списку</li>' +
    '<li>'+ '<span class="line-count"></span>' + ' елемент списку</li>' +
    '<li>'+ '<span class="line-count"></span>' + ' елемент списку</li>' +
    '</ul>'
    list.appendChild(li);
    counter();
}

listAdd.addEventListener('click', addToList);
list.addEventListener('click', (event) => {
    deleteBtns.forEach(btn => {
        listAdd.addEventListener('click', addToList);
        if(btn == event.target) {
            btn.closest('li').remove();
            counter();
        }
    })
})