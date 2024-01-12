var consultas = [];

function agendarConsulta(event) {
  event.preventDefault()

  var nome = document.getElementById("nome").value
  var idade = document.getElementById("idade").value
  var medico = document.getElementById("medico").value
  var data = document.getElementById("data").value
  var horario = document.getElementById("horario").value

  consultas.push({ nome: nome, idade: idade, medico: medico, data: data, horario: horario })

  document.getElementById("nome").value = ""
  document.getElementById("idade").value = ""
  document.getElementById("medico").value = ""
  document.getElementById("data").value = ""
  document.getElementById("horario").value = ""

  mostrarResultados()
  exibirImagem()
}

function mostrarResultados() {
  let resultados = document.getElementById("resultados")
  resultados.innerHTML = ""

  let header = document.createElement("h2")
  header.innerText = "Consultas agendadas"
  resultados.appendChild(header)

  if (consultas.length === 0) {
    let mensagem = document.createElement("p")
    mensagem.innerText = "Nenhuma consulta agendada."
    resultados.appendChild(mensagem)
    return
  }

  let tabela = document.createElement("table")
  let cabecalho = tabela.createTHead()
  let linhaCabecalho = cabecalho.insertRow()
  let Nome = linhaCabecalho.insertCell()
  let Idade = linhaCabecalho.insertCell()
  let Medico = linhaCabecalho.insertCell()
  let Data = linhaCabecalho.insertCell()
  let Horario = linhaCabecalho.insertCell()
  Nome.innerText = "Nome"
  Idade.innerText = "Idade"
  Medico.innerText = "Médico"
  Data.innerText = "Data"
  Horario.innerText = "Horário"

  let corpoTabela = tabela.createTBody()

  for (let i = 0; i < consultas.length; i++) {
    let consulta = consultas[i]
    let linha = corpoTabela.insertRow()
    let Nome = linha.insertCell()
    let Idade = linha.insertCell()
    let Medico = linha.insertCell()
    let Data = linha.insertCell()
    let Horario = linha.insertCell()
    Nome.innerText = consulta.nome
    Idade.innerText = consulta.idade
    Medico.innerText = consulta.medico
    Data.innerText = consulta.data
    Horario.innerText = consulta.horario
  }

  resultados.appendChild(tabela)
}

document.getElementById("formulario").addEventListener("submit", agendarConsulta)
