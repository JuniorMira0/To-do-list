const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listaOrdenada = document.querySelector('#lista-tarefas');
const listas = document.getElementsByClassName('li');

/* ------------------------------------------------- */

// Adiciona a lista de tarefas

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

// adiciona background com um clique

function selectIten(event) {
  const iten = document.querySelector('.selected');
  if (iten) {
    iten.classList.remove('selected');
  }
  event.target.classList.add('selected');
}
listaOrdenada.addEventListener('click', selectIten);

// marca o item com um traço com dois cliques

function markIten(event) {
  event.target.classList.toggle('completed');
}
listaOrdenada.addEventListener('dblclick', markIten);

// adiciona botão para apagar a lista

function clearList() {
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', () => {
    for (let i = listaOrdenada.childNodes.length - 1; i >= 0; i -= 1) {
      listaOrdenada.childNodes[i].remove();
    }
  });
}
clearList();

// adiciona botão que remove os itens marcados como completos

function removeComp() {
  const compButton = document.getElementById('remover-finalizados');
  compButton.addEventListener('click', () => {
    for (let i = 0; i < listas.length; i += 1) {
      while (listas[i].classList.contains('completed')) {
        listas[i].remove();
      }
    }
  });
}
removeComp();

// adiciona botão que remove o iten selecionado

function removeSelec() {
  const selectButton = document.getElementById('remover-selecionado');
  selectButton.addEventListener('click', () => {
    for (let i = 0; i < listas.length; i += 1) {
      if (listas[i].classList.contains('selected')) {
        listas[i].remove();
      }
    }
  });
}
removeSelec();

// Projeto realizado com supervisão de Lucas Cardoso - Software Developer
// Ajuda e revisão de Victor Amancio - Turma 19C
