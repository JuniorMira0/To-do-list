const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

function makeList() {
  const orderList = document.createElement('li');
  orderList.innerText = input.value;
  lista.appendChild(orderList);
  input.value = '';
}

button.addEventListener('click', () => {
  makeList();
});
