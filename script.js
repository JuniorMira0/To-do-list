const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
const listas = document.getElementsByClassName('li');

/* ------------------------------------------------- */

function clearList() {
  for (let i = 0; i < listas.length; i += 1) {
    if (listas[i].classList.contains('selected')) {
      listas[i].classList.remove('selected');
    }
  }
}

function creatClickEvent(element, handler) {
  element.addEventListener('click', handler);
}

function markIten(li) {
  li.addEventListener('dblclick', () => {
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
    }
  });
}

// Cria listas no input

function makeList() {
  const orderList = document.createElement('li');
  orderList.classList.add('li');
  creatClickEvent(orderList, () => {
    clearList();
    orderList.classList.add('selected');
  });
  orderList.innerText = input.value;
  listaOrdenada.appendChild(orderList);
  input.value = '';
  markIten(orderList);
}

window.onload = () => {
  button.addEventListener('click', () => {
    makeList();
  });
};
