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

function creatEvent(element, handler) {
  element.addEventListener('click', handler);
}

// Cria listas no input

function makeList() {
  const orderList = document.createElement('li');
  orderList.classList.add('li');
  creatEvent(orderList, () => {
    clearList();
    orderList.classList.add('selected');
  });
  orderList.innerText = input.value;
  listaOrdenada.appendChild(orderList);
  input.value = '';
}

// seleciona com click cada elemento da lista

window.onload = () => {
  button.addEventListener('click', () => {
    makeList();
  });
};
