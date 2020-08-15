const form = document.querySelector('.form');
const input = document.querySelector('.input');
const itemsList = document.querySelector('.items-list');
const item = document.querySelector('.item');

//draggable
itemsList.addEventListener(`dragstart`, (e) => {
  e.target.classList.add(`selected`);
});

itemsList.addEventListener(`dragend`, (e) => {
  e.target.classList.remove(`selected`);
});

const getNextItem = (cursorPosition, currentItem) => {
  const currentItemCoord = currentItem.getBoundingClientRect();
  const currentItemCenter = currentItemCoord.y + currentItemCoord.height / 2;
  
  const nextItem = (cursorPosition < currentItemCenter) ?
    currentItem :
    currentItem.nextElementSibling;
  
  return nextItem;
};

itemsList.addEventListener(`dragover`, (e) => {
  e.preventDefault();
  
  const activeItem = itemsList.querySelector(`.selected`);
  const currentItem = e.target;
  const isMoveable = activeItem !== currentItem &&
    currentItem.classList.contains(`item`);
    
  if (!isMoveable) {
    return;
  }
  
  const nextItem = getNextItem(e.clientY, currentItem);
  
  if (
    nextItem && 
    activeItem === nextItem.previousElementSibling ||
    activeItem === nextItem
  ) {
    return;
  }
		
	itemsList.insertBefore(activeItem, nextItem);
});

///

let arrData = []

form.addEventListener('submit', function(e) {
  e.preventDefault();
  addObj(input.value)
})

function addObj(item) {
  if (item !== '') {
    const obj = {
      id: Date.now(),
      name: item
    }
      arrData.push(obj);
      addToLocalStorage(arrData);
      input.value = '';
  }
}

function renderArrData(arrData) {
  itemsList.innerHTML = '';
  arrData.forEach(function(item){
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    li.setAttribute('draggable','true');
    li.setAttribute('contenteditable','true');
    li.innerHTML = `<p class="text">
    ${item.name}</p>
    <button class="delete-button" title="Удалить?"></button>
    `
    itemsList.append(li);
  })
}

function addToLocalStorage(arrData) {
  localStorage.setItem('arrData', JSON.stringify(arrData));
  renderArrData(arrData);
}
function getFromLocalStorage() {
  const reference = localStorage.getItem('arrData');
  if(reference) {
    arrData = JSON.parse(reference);
    renderArrData(arrData);
  }
}

function deleteObj(id) {
  arrData = arrData.filter(function(item) {
    return item.id !=id;
  })
  addToLocalStorage(arrData);
}
getFromLocalStorage();

itemsList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-button')) {
    deleteObj(e.target.parentElement.getAttribute('data-key'));
  }
});

// const text = document.querySelector('.text')
// text.addEventListener('dblclick', (e) => {
//    {
//     text.setAttribute('contenteditable', 'true')
//   }
// })

