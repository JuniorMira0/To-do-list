const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
const listas = document.getElementsByClassName('li');

/* ------------------------------------------------- */

function makeListIten() {
  button.addEventListener('click', () => {
    const orderList = document.createElement('li');
    orderList.classList.add('li');
    orderList.innerText = input.value;
    listaOrdenada.appendChild(orderList);
    input.value = '';
  });
}
makeListIten();

function selectIten(event) {
  const iten = document.querySelector('.selected');
  if (iten) {
    iten.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
listaOrdenada.addEventListener('click', selectIten);

function markIten(event) {
  event.target.classList.toggle('completed');
}
listaOrdenada.addEventListener('dblclick', markIten);
