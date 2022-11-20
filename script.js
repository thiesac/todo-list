let lista = [];
let indiceSelecionado = -1;

function adicionarTarefa() {
  let tarefa = document.getElementById("tarefa").value;

  if (tarefa == "") {
    return alert("Preencha campo");
  }

  if (indiceSelecionado == -1) {
    //caso usuário esteja acrescentando
    let objeto = {
      desc: tarefa,
      feito: false,
    };
    lista.push(objeto);
  } else {
    //caso o usuário esteja editando
    let objetoAlterado = {
      desc: tarefa,
      feito: false,
    };
    lista[indiceSelecionado] = objetoAlterado;
    indiceSelecionado = -1;
  }

  document.getElementById("tarefa").value = "";
  atualizarTela();
}

function atualizarTela() {
  let mostrar = document.getElementById("mostrar-lista");

  mostrar.innerHTML = "";
  for (let i = 0; i < lista.length; i++) {
    mostrar.innerHTML += `
      <div class="show-user">  
        <div><span><input type="checkbox" onchange=concluirTarefa(${i})>${lista[i].desc}</span></div>
        <div><img src="img/edit-24.png" onclick=prepararTela(${i})><img src="img/trash-24.png" onclick=excluir(${i})></div>
      </div>
        `;
  }
}

function excluir(i) {
  lista.splice(i, 1);
  atualizarTela();
}

function prepararTela(i) {
  document.getElementById("tarefa").value = lista[i].desc;
  indiceSelecionado = i;
}

function limpar() {
  document.getElementById("tarefa").value = "";
  indiceSelecionado = -1;
}

function concluirTarefa(i) {
  let checkbox = document.querySelectorAll("input[type='checkbox']")[i].checked;
  let mostrar = document.querySelectorAll("span")[i];

  if (checkbox == true) {
    mostrar.style.textDecoration = "line-through";
  } else {
    mostrar.style.textDecoration = "none";
  }
}
