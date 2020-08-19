// import Pickr from '@simonwep/pickr';
import Pickr from '@simonwep/pickr/dist/pickr.es5.min';

const form = document.querySelector('.form');
const inputName = document.querySelector('.input-name');
const inputType = document.querySelector('.input-type');
const inputColor = document.querySelector('.input-color');
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addObj(inputName.value, inputType.value, inputColor.value)
})

const addObj = (name, type, color) => {
  if (inputName.value !== '' && inputType.value !== '' &&
  inputColor.value !== null && inputColor.value !== undefined) {
    const obj = {
      id: Date.now(),
      name,
      type,
      color
    }
      arrData.push(obj);
      addToLocalStorage(arrData);
      inputName.value = '';
      inputType.value = '';
      inputColor.value = '';
  }
}

const renderArrData = (arrData) => {
  itemsList.innerHTML = '';
  arrData.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    li.setAttribute('draggable','true');
    li.setAttribute('contenteditable','false');
    li.innerHTML = `
    <div class="text text-name">${item.name}</div>
    <div class="text text-type">${item.type}</div>
    <div class="text text-color">${item.color}</div>
    <button class="button edit-button action-button" title="edit"></button>
    <button class="button delete-button action-button" title="delete notation"></button>
    `
    itemsList.append(li);
  })
}

const addToLocalStorage = (arrData) => {
  localStorage.setItem('arrData', JSON.stringify(arrData));
  renderArrData(arrData);
}

const  getFromLocalStorage = () => {
  const reference = localStorage.getItem('arrData');
  if(reference) {
    arrData = JSON.parse(reference);
    renderArrData(arrData);
  }
}

const  deleteObj = (id) => {
  arrData = arrData.filter(function(item) {
    return item.id !=id;
  })
  addToLocalStorage(arrData);
}
getFromLocalStorage();

itemsList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-button")) {
    deleteObj(e.target.parentElement.getAttribute("data-key"));
  }
  editObj(e.target);
});

const editObj = (currentItem) => {
  if (currentItem.classList.contains("edit-button")) {
    const currentItemId = currentItem.parentElement.getAttribute("data-key");
    const textName = currentItem.parentElement.querySelector(".text-name");
    const textType = currentItem.parentElement.querySelector(".text-type");
    const textColor = currentItem.parentElement.querySelector(".text-color");
    const updateItem = {
      id: Number(currentItemId),
      name: textName.textContent,
      type: textType.textContent,
      color: textColor.textContent,
    };

    currentItem.classList.toggle("active");
    currentItem.parentElement.classList.toggle("active");
    textName.toggleAttribute("contenteditable");
    textType.toggleAttribute("contenteditable");
    textColor.toggleAttribute("contenteditable");

    if (!currentItem.parentElement.classList.contains("active")) {
      addToLocalStorage(updateData(updateItem));
    }
  }
}

const updateData = (updateItem) => {
  const index = arrData.findIndex((item) => item.id === updateItem.id);

  if (index >= 0) {
    arrData[index] = updateItem;
  }
  return arrData;
};

const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'monolith',
  useAsButton: true,

  components: {

      // Main components
      preview: true,
      opacity: false,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          hsla: false,
          hsva: false,
          cmyk: false,
          input: true,
          clear: true,
          save: true
      }
  }
});
// color picker value
pickr.on('change', (color) => {
	inputColor.value = color[`to${pickr.getColorRepresentation()}`]().toString(0);
})